var settingsmenu = document.querySelector(".settings-menu");
var darkbtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkbtn.onclick = function(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }



}

if(localStorage.getItem("theme") == "light"){
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}


const  button  = document.querySelector(".see-more");
var shortcut = document.querySelector(".hide-short");

function  seeToggle() {
    shortcut.classList.toggle("hide-short-no");
    if(button.innerText === 'See More'){
        button.innerText = 'See Less';
    }else{
        button.innerText = 'See More';
    }
}


var mymember = document.querySelector(".my-members");
function mymemToggle(){
    mymember.classList.toggle("my-members-on");
}