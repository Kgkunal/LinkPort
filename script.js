const darkmodebtn = document.getElementById('dark-mode-btn');

darkmodebtn.addEventListener("click", function(){
    console.log("btn is clicked")
    darkmodebtn.classList.add('fa-moon');
    darkmodebtn.classList.remove('fa-sun');
})