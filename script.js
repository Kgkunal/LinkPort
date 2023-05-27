const darkmodebtn = document.getElementById('dark-mode-btn');
const body = document.querySelector('body');
const modeIcon = document.getElementById('mode-icon');

darkmodebtn.addEventListener("click", function(){
    console.log("mode btn is clicked");
   
    modeIcon.classList.add('fa-moon');
    modeIcon.classList.remove('fa-sun');
    changeMode();
    
});

// function to change color according to mode

const modebtn = document.querySelector('.dark-mode-btn');
const menuebtn = document.querySelector('.share-button');
const menueIcon = document.getElementById('mIcon');
const pName = document.getElementById('profile-name');
const footerline = document.querySelector('.list');
function changeMode(){
    body.style.backgroundColor= "white";
    modebtn.style.backgroundColor = "black";
    menuebtn.style.backgroundColor = "black";
    modeIcon.style.color= "white";
    menueIcon.style.color= "white";
    pName.style.color = "black";
    footerline.style.color = "black";

    
}
