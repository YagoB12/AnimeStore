const heroImage = document.getElementById("heroImage");

const title = document.getElementById("title");

const subtitle = document.getElementById("subtitle");

const description = document.getElementById("description");

const dotsContainer = document.querySelector(".dots");

const next = document.querySelector(".right");

const prev = document.querySelector(".left");

let current = 0;

// =======================
// Crear indicadores
// =======================

mangas.forEach((_, index) => {

    const dot = document.createElement("span");

    if(index === 0){

        dot.classList.add("active");

    }

    dot.addEventListener("click",()=>{

        current = index;

        loadSlide(current);

    });

    dotsContainer.appendChild(dot);

});

const dots = document.querySelectorAll(".dots span");

// =======================
// Cargar Slide
// =======================

function loadSlide(index){

    heroImage.src = mangas[index].imagen;

    title.textContent = mangas[index].titulo;

    subtitle.textContent = mangas[index].categoria;

    description.textContent = mangas[index].descripcion;

    dots.forEach(dot=>dot.classList.remove("active"));

    dots[index].classList.add("active");

}

// =======================

function nextSlide(){

    current++;

    if(current >= mangas.length){

        current = 0;

    }

    loadSlide(current);

}

// =======================

function prevSlide(){

    current--;

    if(current < 0){

        current = mangas.length - 1;

    }

    loadSlide(current);

}

// =======================

next.addEventListener("click",nextSlide);

prev.addEventListener("click",prevSlide);

// =======================

setInterval(nextSlide,5000);

// =======================

loadSlide(current);