const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dots span");

const next = document.querySelector(".right");

const prev = document.querySelector(".left");

let current = 0;

function showSlide(index){

    slides.forEach(slide=>slide.classList.remove("active"));

    dots.forEach(dot=>dot.classList.remove("active"));

    slides[index].classList.add("active");

    dots[index].classList.add("active");

}

function nextSlide(){

    current++;

    if(current >= slides.length){

        current = 0;

    }

    showSlide(current);

}

function prevSlide(){

    current--;

    if(current < 0){

        current = slides.length-1;

    }

    showSlide(current);

}

next.addEventListener("click",()=>{

    nextSlide();

});

prev.addEventListener("click",()=>{

    prevSlide();

});

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current=index;

        showSlide(current);

    });

});

setInterval(()=>{

    nextSlide();

},5000);