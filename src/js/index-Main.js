const JudulTentangJakarta = document.querySelector(".Tentang-Jakarta-Judul");
const TextTentangJakarta1 = document.querySelector(".Teks-1 p");
const TextTentangJakarta2 = document.querySelector(".Teks-2 p");
const ImageTentangJakarta1 = document.querySelector(
  ".Tentang-Jakarta-image1 img"
);
const ImageTentangJakarta2 = document.querySelector(
  ".Tentang-Jakarta-image2 img"
);
// Budaya , makanan , Wisata
const JudulTentangBudaya = document.querySelector(".Tentang-Budaya-Judul");
const JudulTentangMakanan = document.querySelector(".Tentang-Makanan-Judul");
const JudulTentangWisata = document.querySelector(".Tentang-Wisata-Judul");
const ContainerFigureBudaya = document.querySelector(
  ".Container-Figure-Budaya"
);
const ContainerFigureMakanan = document.querySelector(
  ".Container-Figure-Makanan"
);
const ContainerFigureWisata = document.querySelector(
  ".Container-Figure-Wisata"
);
if (innerWidth < 600) {
  JudulTentangJakarta.style.display = "block";
  TextTentangJakarta1.style.display = "block";
  ImageTentangJakarta1.style.display = "block";
  window.addEventListener("scroll", () => {
    if (this.scrollY > 200) {
      TextTentangJakarta2.style.display = "block";
    }
    if (this.scrollY > 300) {
      ImageTentangJakarta2.style.display = "block";
    }
    if (this.scrollY > 780) {
      JudulTentangBudaya.style.display = "block";
    }
    if (this.scrollY > 830) {
      ContainerFigureBudaya.style.display = "flex";
    }
    if (this.scrollY > 1520) {
      JudulTentangMakanan.style.display = "block";
    }
    if (this.scrollY > 1570) {
      ContainerFigureMakanan.style.display = "flex";
    }
    if (this.scrollY > 2270) {
      JudulTentangWisata.style.display = "block";
    }
    if (this.scrollY > 2310) {
      ContainerFigureWisata.style.display = "flex";
    }
  });
} else if (innerWidth < 970 && innerHeight <= 800) {
  JudulTentangJakarta.style.display = "block";
  TextTentangJakarta1.style.display = "block";
  ImageTentangJakarta1.style.display = "block";
  window.addEventListener("scroll", () => {
    if (this.scrollY > 200) {
      TextTentangJakarta2.style.display = "block";
    }
    if (this.scrollY > 300) {
      ImageTentangJakarta2.style.display = "block";
    }
    if (this.scrollY > 780) {
      JudulTentangBudaya.style.display = "block";
    }
    if (this.scrollY > 830) {
      ContainerFigureBudaya.style.display = "flex";
    }
    if (this.scrollY > 1520) {
      JudulTentangMakanan.style.display = "block";
    }
    if (this.scrollY > 1570) {
      ContainerFigureMakanan.style.display = "flex";
    }
    if (this.scrollY > 1900) {
      JudulTentangWisata.style.display = "block";
    }
    if (this.scrollY > 1920) {
      ContainerFigureWisata.style.display = "flex";
    }
  });
} else if (innerWidth > 970 || innerHeight > 790) {
  window.addEventListener("scroll", () => {
    if (this.scrollY > 190) {
      JudulTentangJakarta.style.display = "block";
      TextTentangJakarta1.style.display = "block";
      ImageTentangJakarta1.style.display = "block";
    }
    if (this.scrollY > 840) {
      TextTentangJakarta2.style.display = "block";
      ImageTentangJakarta2.style.display = "block";
    }
    if (this.scrollY > 1650) {
      JudulTentangBudaya.style.display = "block";
    }
    if (this.scrollY > 1790) {
      ContainerFigureBudaya.style.display = "flex";
    }
    if (this.scrollY > 2100) {
      JudulTentangMakanan.style.display = "block";
      ContainerFigureMakanan.style.display = "flex";
    }
    if (this.scrollY > 2630) {
      JudulTentangWisata.style.display = "block";
      ContainerFigureWisata.style.display = "flex";
    }
  });
} else {
  JudulTentangJakarta.style.display = "block";
  TextTentangJakarta1.style.display = "block";
  ImageTentangJakarta1.style.display = "flex";
}

const arrListBudaya = [
  ["./src/img/image-budaya1.png", "Pencak Silat"],
  ["./src/img/image-budaya2.png", "Lenong"],
  ["./src/img/image-budaya3.png", "Gambang Kromong"],
  ["./src/img/image-budaya4.png", "Ondel-ondel"],
  ["./src/img/image-budaya5.png", "Palang Pintu"],
];
let countDuration = 0;

let returnShowBudaya = arrListBudaya
  .map((show) => {
    return `<section class="section-figure-Budaya">
  <figure class="image-budaya">
    <img src=${show[0]} alt="" />
  </figure>
  <figcaption class="text-image-budaya">
    <p>${show[1]}</p>
  </figcaption>
</section>`;
  })
  .join("");
ContainerFigureBudaya.innerHTML = returnShowBudaya;

const arrListMakanan = [
  ["./src/img/image-makanan1.png", "Kerak Telor"],
  ["./src/img/image-makanan2.png", "Soto Betawi"],
  ["./src/img/image-makanan3.png", "Gabus Pucung"],
  ["./src/img/image-makanan4.png", "Karedok"],
  ["./src/img/image-makanan5.png", "Putu Mayang"],
];

let returnShowMakanan = arrListMakanan
  .map((show) => {
    return `<section class="section-figure-Makanan" style="animation-delay:${countDuration++}ms;";>
    <figure class="image-Makanan">
      <img src=${show[0]} alt="" />
    </figure>
    <figcaption class="text-image-Makanan">
      <p>${show[1]}</p>
    </figcaption>
  </section>`;
  })
  .join("");

ContainerFigureMakanan.innerHTML = returnShowMakanan;

const arrListWisata = [
  ["./src/img/image-wisata1.png", "TMII"],
  ["./src/img/image-wisata2.png", "Ragunan"],
  ["./src/img/image-wisata3.png", "Ancol"],
  ["./src/img/image-wisata4.png", "Kota Tua"],
  ["./src/img/image-wisata5.png", "Museum Fatahilla"],
];

let returnShowWisata = arrListWisata
  .map((show) => {
    return `<section class="section-figure-Wisata">
    <figure class="image-Wisata">
      <img src=${show[0]} alt="" />
    </figure>
    <figcaption class="text-image-Wisata">
      <p>${show[1]}</p>
    </figcaption>
  </section>`;
  })
  .join("");

ContainerFigureWisata.innerHTML = returnShowWisata;
