const contactBtn = document.getElementById('contact'),
privacyBtn = document.getElementById('privacy'),
termsBtn = document.getElementById('terms'),
popup = document.querySelector('.popup'),
contact = document.querySelector('.contact'),
privacy = document.querySelector('.privacy'),
terms = document.querySelector('.terms'),
exitBtn = document.getElementById('exit'),
aurem = document.querySelectorAll('.aurem');

let popupOpen = false;

function checkCookies(){
    let cookieDate = localStorage.getItem('cookieDate');
    let cookieNotification = document.getElementById('cookie_notification');
    let cookieBtn = cookieNotification.querySelector('.cookie_accept');

    // Если записи про кукисы нет или она просрочена на 1 год, то показываем информацию про кукисы
    if( !cookieDate || (+cookieDate + 31536000000) < Date.now() ){
        cookieNotification.classList.add('show');
        console.log("no cuckie");
    }

    // При клике на кнопку, в локальное хранилище записывается текущая дата в системе UNIX
    cookieBtn.addEventListener('click', function(){
        localStorage.setItem( 'cookieDate', Date.now() );
        cookieNotification.classList.remove('show');
    })
}

checkCookies();

$(document).ready(function () {
    let userheight = window.innerHeight;

    popup.style.height = `${userheight}px`;

    aurem.forEach(elem => {
        elem.style.height = `${userheight - 65}px`;
    });
});

contactBtn.addEventListener('click', () => {
    if(popupOpen == false){
        popup.style.display = 'grid';
        contact.style.display = 'grid';
        popupOpen = true;
    }
    else{
        alert("Popup is open!");
    }
});

privacyBtn.addEventListener('click', () => {
    if(popupOpen == false){
        popup.style.display = 'grid';
        privacy.style.display = 'grid';
        popupOpen = true;
    }
    else{
        alert("Popup is open!");
    }
});

termsBtn.addEventListener('click', () => {
    if(popupOpen == false){
        popup.style.display = 'grid';
        terms.style.display = 'grid';
        popupOpen = true;
    }
    else{
        alert("Popup is open!");
    }
});

exitBtn.addEventListener('click', () => {
    if(popupOpen == true){
        contact.style.display = 'none';
        privacy.style.display = 'none';
        terms.style.display = 'none';
        popup.style.display = 'none';
        popupOpen = false;
    }
});


