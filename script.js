function startAnim(){
    document.querySelectorAll('.animation').forEach((item)=>item.classList.add('show'))
}

startAnim()

// Таймер
const startTimer = {
    day: 27,
    month: 4,
    year: 2024,
};

const endTimer = new Date('2024-07-24');

const interval = setInterval(runTimer, 1000);
 
function runTimer() {
    if (new Date(startTimer.year, startTimer.month - 1, startTimer.day) > new Date()) return;

    const currentDate = new Date();
    const difference = endTimer.getTime() - currentDate.getTime();

    if (difference <= 0) {
        clearInterval(interval);
    } else {

        document.querySelector('.days').innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24));
        document.querySelector('.hours').innerHTML = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.querySelector('.minutes').innerHTML = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        document.querySelector('.seconds').innerHTML = Math.floor((difference % (1000 * 60)) / 1000);

    }
}

runTimer()

// Валидация формы + popup

const formButton = document.querySelector('.form__button');
const email = document.querySelector('.email');
const popup = document.querySelector('.popup');
    
email.oninput = () => email.classList.remove('err');

formButton.onclick = function(e){
    e.preventDefault();
    
    if(isEmailValid(email.value)){
        email.value = '';
        popup.style.visibility = "visible";
    }else{
        email.classList.add('err')
    }

}

function isEmailValid(value) {
    return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(value);
}

popup.onclick = function(e){
    if(e.target.closest('.exit'))  popup.style.visibility = "hidden";
}

