import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputElement = document.querySelector('input[name="delay"]');

inputElement.addEventListener('input', (event) => {
    event.target.style.border = '1px solid #4E75FF';
});
inputElement.addEventListener('blur', (event) => { 
    event.target.style.border = '1px solid #808080';
});

const fieldset = document.querySelector('fieldset');
const inputFieldset = document.querySelectorAll('input[type="radio"][name="state"]');
inputFieldset.forEach(input => {
    input.addEventListener('input', (event) => {
        fieldset.style.border = '1px solid #4E75FF';
    });
    input.addEventListener('blur', (event) => {
        fieldset.style.border = '1px solid #808080';
    });
});

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    let delay = inputElement.value;
    const promise = new Promise((resolve, reject) => {
        const stateValue = document.querySelector('input[name="state"]:checked').value;
        if (stateValue === 'fulfilled') {
            resolve();
        } else {
            reject();
        }
    });

    setTimeout(() => {
        promise
            .then(() => {
                iziToast.success({
                    message: `✅ Fulfilled promise in ${delay} ms`,
                    icon: '',
                    backgroundColor: '#59A10D',
                    position: 'topRight',
                    progressBarColor: '#326101',
                    messageColor: 'white',
                    close: false,
                });
            })
            .catch(() => {
                iziToast.error({
                    message: `❌ Rejected promise in ${delay} ms`,
                    icon: '',
                    backgroundColor: '#EF4040',
                    position: 'topRight',
                    progressBarColor: '#B51B1B',
                    messageColor: 'white',
                    close: false,
                });
            });
    }, delay);
    event.preventDefault();
    form.reset();
});

