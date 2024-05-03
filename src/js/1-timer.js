import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


let userSelectedDate = null;
let todayDate;
const inputElement = document.getElementById('datetime-picker');
const buttonElement = document.querySelector('button[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
buttonElement.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose: function(selectedDates) {
        userSelectedDate = selectedDates[0];
        if (userSelectedDate < options.defaultDate) {
            iziToast.error({
                message: '❌ Please choose a date in the future',
                icon: '',
                backgroundColor: '#EF4040',
                position: 'topRight',
                progressBarColor: '#B51B1B',
                messageColor: 'white',
                close: false,
            });
            buttonElement.disabled = true;
            
        } else {
            buttonElement.disabled = false;
        }
    },
};
flatpickr("#datetime-picker", options);

function  convertMs(ms) {
    const second = 1000 ;
    const minute = second * 60 ;
    const hour = minute * 60 ;
    const day = hour * 24 ;
    const days = Math.floor (ms/ day);
    const hours = Math.floor ((ms % day )/hour);
    const minutes = Math.floor (((ms % day ) % hour )/minute);
    const seconds = Math.floor ((((ms % day ) % hour )% minute )/second);

    return { days, hours, minutes, seconds };
}
function pad(value) {
    return String(value).padStart(2, '0');
}

buttonElement.addEventListener('click', () => {
    let intervalId = setInterval(() => {
        todayDate = new Date();
        const ms = userSelectedDate.getTime() - todayDate.getTime();
        if (ms <= 0) {
            clearInterval(intervalId);
            inputElement.disabled = false;
            return;
        }
        const { days, hours, minutes, seconds } = convertMs(ms);
        daysElement.textContent = pad(days);
        hoursElement.textContent = pad(hours);
        minutesElement.textContent = pad(minutes);
        secondsElement.textContent = pad(seconds);
    },1000);
    buttonElement.disabled = true;
    inputElement.disabled = true;
});

