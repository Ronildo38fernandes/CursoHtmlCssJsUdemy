//seleção dos elementos
const menuBtn = document.querySelector("#menu");
const closeMenuBtn =  document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

const desktopLinks = document.querySelectorAll("#navbar a");
const molbileLiks = document.querySelectorAll("#mobile-navbar a");
const allLinks = [...desktopLinks,...molbileLiks]


const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot")

let slideIndex = 0;

//funções
function smoothScroll(e){
        e.preventDefault();

        const heref = this.getAttribute("href");
        
        const offsetTop = document.querySelector(heref).offsetTop;

        scroll({
              top: offsetTop,
              behavior:"smooth",  
        });

        setTimeout(()=> {
                if(menu.classList.contains("menu-active")){
                       
                        menu.classList.remove("menu-active");  
                }
        },500)
};

function showSlides(){

        for(let i =0 ;i < slides.length; i++){
                slides[i].classList.remove("active");
                dots[i].classList.remove("active")
        }

        slideIndex++;
        if(slideIndex > slides.length){
                slideIndex = 1
        }
        slides[slideIndex -1].classList.add("active")
        dots[slideIndex -1].classList.add("active")

        setTimeout(showSlides,3000);
}

//Eventos
[menuBtn,closeMenuBtn].forEach((btn) => {
        btn.addEventListener("click", (e) =>{
                menu.classList.toggle("menu-active");
        });
});

allLinks.forEach((link) => {
        link.addEventListener("click",smoothScroll);

})

//iniciar
showSlides();