
// functions
// function of going to the top of the page 
var myscrollbutton = document.getElementById('gotop');
 window.onscroll=function(){
     if(window.pageYOffset>=40){
         myscrollbutton.style.opacity=1
         myscrollbutton.classList.add("activeg");
     }else{
        myscrollbutton.classList.remove("activeg");
        myscrollbutton.style.opacity=0


 }
}

var navList = document.getElementById('navlist');
var sections = document.querySelectorAll('section');
// toggle menu
var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.navbar');
toggleButton.addEventListener('click', function () {
  navBar.classList.toggle('toggle');
});
//active nav bar
var navLinks = document.querySelectorAll("header nav ul li a")

window.addEventListener("scroll",function(event){
event.preventDefault();
    let current = '';
    sections.forEach(section =>{
    const sectionTop = section.offsetTop
    const sectionHight = section.clientHeight ;
    if(pageYOffset >= sectionTop){
        current = "#"+section.getAttribute("id")
    }
})
navLinks.forEach(link=>{

link.classList.remove("activenav")
let activelink = link.getAttribute("href");
if(activelink === current){
 link.classList.add("activenav")
}
})
})



 
//counter function
const counters= document.querySelectorAll(".counters")

counters.forEach(counter=>{
    counter.innerHTML="0"
    const Updatecounter =()=>{
        const traget= +counter.getAttribute("data-target")
        const x = Number(counter.innerText)
        const increment = traget/4000;
        if(x<traget){
            counter.innerText=`${Math.ceil(x+increment)}`
        setTimeout(Updatecounter,1)

        }else{
            counter.innerText = traget
        }
    }
    Updatecounter()

})

var action= document.getElementsByClassName("action");
var btn= document.getElementsByClassName("btn")
for(var i=0;i<action.length;i++){

    action[i].addEventListener("click",function(){
        this.classList.toggle("active")
    var desc= this.nextElementSibling;
    if(desc.style.maxHeight){
        desc.style.maxHeight=null
    }else{
        desc.style.maxHeight = desc.scrollHeight +"px"
    }
 })
}


// functions 

// fixed header
   window.onscroll = function fixedHead(){
    if(window.scrollY >=60){
    document.getElementById("nav").style.background="rgba(252, 252, 252)";
    }else if(window.scrollY<=60){
    document.getElementById("nav").style.background="#c5c4c4";
    }else{
    return false
    }}
    
    // function 
    // active nav function
    

    
