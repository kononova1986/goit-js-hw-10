import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as y,i as p}from"./assets/vendor-77e16229.js";let r=null,u;const i=document.getElementById("datetime-picker"),t=document.querySelector("button[data-start]"),b=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),E=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]");t.disabled=!0;const l={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(e){r=e[0],r<l.defaultDate?(p.error({message:"❌ Please choose a date in the future",icon:"",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B",messageColor:"white",close:!1}),t.disabled=!0):t.disabled=!1}};y("#datetime-picker",l);function S(e){const s=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:m,minutes:f,seconds:h}}function o(e){return String(e).padStart(2,"0")}t.addEventListener("click",()=>{let e=setInterval(()=>{u=new Date;const n=r.getTime()-u.getTime();if(n<=0){clearInterval(e),i.disabled=!1;return}const{days:a,hours:d,minutes:c,seconds:s}=S(n);b.textContent=o(a),g.textContent=o(d),E.textContent=o(c),C.textContent=o(s)},1e3);t.disabled=!0,i.disabled=!0});
//# sourceMappingURL=commonHelpers.js.map
