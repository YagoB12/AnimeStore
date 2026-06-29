const MANGA_DATA = [
  { title: "Jujutsu Kaisen",   vol: 29,  cover: "assets/updates/jujutsu.webp",           desc: "Yuji Itadori ingiere un dedo maldito y se convierte en el recipiente del demonio Ryomen Sukuna, uniéndose a los hechiceros para exorcizar maldiciones." },
  { title: "One Piece",        vol: 111, cover: "assets/updates/Volumen_111.webp",        desc: "Monkey D. Luffy y su tripulación navegan los mares en busca del legendario tesoro One Piece para que Luffy se convierta en el Rey de los Piratas." },
  { title: "My Hero Academia", vol: 42,  cover: "assets/updates/tomo3.webp",             desc: "En un mundo donde casi todos tienen superpoderes, Izuku Midoriya nace sin ninguno pero sueña con convertirse en el héroe más grande." },
  { title: "Black Clover",     vol: 37,  cover: "assets/updates/tomo2.jpg",              desc: "Asta, un niño sin magia en un mundo lleno de ella, aspira a convertirse en el Emperador Mago gracias a su espada anti-magia." },
  { title: "Kimetsu no Yaiba", vol: 23,  cover: "assets/updates/toomo23.webp",           desc: "Tanjiro Kamado se convierte en cazador de demonios tras ver a su familia masacrada, buscando una cura para su hermana convertida en demonio." },
  { title: "Hell's Paradise",  vol: 13,  cover: "assets/updates/tomo13.jpg",             desc: "Gabimaru, un ninja indestructible, debe encontrar el elixir de la inmortalidad en una isla misteriosa para ganar su libertad." },
  { title: "Chainsaw Man",     vol: 16,  cover: "assets/updates/tomochainsawman.jpeg",   desc: "Denji fusiona su cuerpo con su perro demonio Pochita y se convierte en Chainsaw Man, cazando demonios para la organización pública de seguridad." },
  { title: "Bleach",           vol: 74,  cover: "assets/updates/bleach.jpg",             desc: "Ichigo Kurosaki obtiene los poderes de un Shinigami y debe defender a los humanos de los Hollows mientras descubre su verdadero origen." },
  { title: "One Punch Man",    vol: 33,  cover: "assets/updates/tomoOnePunch.webp",      desc: "Saitama es un héroe que puede derrotar a cualquier enemigo de un solo golpe, pero su poder absoluto lo tiene sumido en un profundo aburrimiento." },
  { title: "Sakamoto Days",    vol: 21,  cover: "assets/updates/tomo5.jpg",              desc: "Taro Sakamoto, el asesino más temido del mundo, lo dejó todo por amor. Ahora lleva una vida tranquila... hasta que su pasado lo encuentra." },
  { title: "Attack on Titan",  vol: 34,  cover: "assets/updates/aot.jpg",               desc: "La humanidad sobrevive dentro de murallas gigantes protegiéndose de los Titanes. Eren Jaeger jura eliminarlos a todos tras una tragedia personal." },
  { title: "Tokyo Revengers",  vol: 31,  cover: "assets/updates/tomoTokyo.webp",        desc: "Takemichi Hanagaki descubre que puede viajar al pasado e intenta salvar a su ex novia cambiando el destino de una violenta banda de motociclistas." },
];

const PER_PAGE = 8;
let currentPage = 1;
const totalPages = Math.ceil(MANGA_DATA.length / PER_PAGE);

function renderGrid(page) {
  const grid = document.getElementById("mangaGrid");
  grid.innerHTML = "";

  const start = (page - 1) * PER_PAGE;
  const items = MANGA_DATA.slice(start, start + PER_PAGE);

  items.forEach(({ title, vol, cover, desc }) => {
    const card = document.createElement("div");
    card.className = "manga-card";
    card.innerHTML = `
      <div class="manga-card__cover-wrap">
        <img class="manga-card__cover" src="${cover}" alt="${title}" />
        <div class="manga-card__overlay">
          <p class="manga-card__desc">${desc}</p>
        </div>
      </div>
      <div class="manga-card__info">
        <p class="manga-card__title">${title}</p>
        <p class="manga-card__vol">VOL: ${vol}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderPagination(page) {
  const nav = document.getElementById("pagination");
  nav.innerHTML = "";

  const prev = document.createElement("button");
  prev.className = "pagination__btn";
  prev.textContent = "<";
  prev.setAttribute("aria-label", "Página anterior");
  prev.disabled = page === 1;
  prev.addEventListener("click", () => goTo(page - 1));
  nav.appendChild(prev);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.className = "pagination__btn" + (i === page ? " active" : "");
    btn.textContent = i;
    btn.setAttribute("aria-label", `Página ${i}`);
    if (i === page) btn.setAttribute("aria-current", "page");
    btn.addEventListener("click", () => goTo(i));
    nav.appendChild(btn);
  }

  const next = document.createElement("button");
  next.className = "pagination__btn";
  next.textContent = ">";
  next.setAttribute("aria-label", "Página siguiente");
  next.disabled = page === totalPages;
  next.addEventListener("click", () => goTo(page + 1));
  nav.appendChild(next);
}

function goTo(page) {
  currentPage = page;
  renderGrid(currentPage);
  renderPagination(currentPage);
}

goTo(1);