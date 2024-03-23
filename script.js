const darkmodebtn = document.getElementById('dark-mode-btn');
const body = document.querySelector('body');
const modeIcon = document.getElementById('mode-icon');

darkmodebtn.addEventListener("click", function(){
    console.log("mode btn is clicked");

    // Check if dark mode is currently active
    var isDarkMode = modeIcon.classList.contains('fa-moon');
    
    // Toggle mode icon classes based on the current mode
    if (isDarkMode) {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
        changeMode('light'); // Pass 'light' mode to changeMode function
    } else {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
        changeMode('dark'); // Pass 'dark' mode to changeMode function
    }
});

// function to change color according to mode
function changeMode(mode){
    if(mode === 'light'){
        body.style.backgroundColor= "white";
        modebtn.style.backgroundColor = "black";
        menuebtn.style.backgroundColor = "black";
        modeIcon.style.color= "white";
        menueIcon.style.color= "white";
        pName.style.color = "black";
        footerline.style.color = "black";
    } else {
        body.style.backgroundColor= "black";
        modebtn.style.backgroundColor = "white";
        menuebtn.style.backgroundColor = "white";
        modeIcon.style.color= "black";
        menueIcon.style.color= "black";
        pName.style.color = "white";
        footerline.style.color = "white";
    }
}

// Rest of your code remains unchanged
