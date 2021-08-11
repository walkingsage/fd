const contactBtn = document.getElementById('contact'),
privacyBtn = document.getElementById('privacy'),
termsBtn = document.getElementById('terms'),
popup = document.querySelector('.popup'),
contact = document.querySelector('.contact'),
privacy = document.querySelector('.privacy'),
terms = document.querySelector('.terms'),
exitBtn = document.getElementById('exit');

let popupOpen = false,
cookieAcceps = false;




contactBtn.addEventListener('click', () => {
    if(popupOpen == false){
        popup.style.display = 'flex';
        contact.style.display = 'grid';
        popupOpen = true;
    }
    else{
        alert("Popup is open!");
    }
});

privacyBtn.addEventListener('click', () => {
    if(popupOpen == false){
        popup.style.display = 'flex';
        privacy.style.display = 'grid';
        popupOpen = true;
    }
    else{
        alert("Popup is open!");
    }
});

termsBtn.addEventListener('click', () => {
    if(popupOpen == false){
        popup.style.display = 'flex';
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


