var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }

        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");

    }

//---------------- side menu tag

var sidemeu = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}
//-------------------------------- typed.js

var typed = new Typed('.span', {
    strings: ["Welcome to My Portfolio !!", "I'm Software Developer....","I'm Full Stack Web Developer...."],
    typeSpeed: 20,
    backdelay: 20,
    backSpeed: 90,
    loop: true
  });




  //-----------------------All key Disabled----------

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  }, false);


  document.addEventListener("keydown", (e) => {
    
    if (e.ctrlKey || e.keyCode == 123) {
      e.stopPropagation();
      e.preventDefault();
    }
  });