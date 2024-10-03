var settingsmenu = document.querySelector(".settings");

var darkbtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-height");
}
darkbtn.onclick = function() {
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-mode");  

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light"){
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-mode");
}
else if (localStorage.getItem("theme") == "dark"){
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-mode")
}
else {
    localStorage.setItem("theme", "light");
}