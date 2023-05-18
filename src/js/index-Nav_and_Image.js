const LogoOrangJakarta = document.querySelector(".header-sub-judul-web  h1");
const BurgerNavList = document.querySelector(".burgerNav-list");
const ListMobile = document.querySelectorAll(".burgerNav-list ul li a");
const burgerNav = document.querySelector(".burgerNav");
const ListImage = document.querySelectorAll(".header-2 article");
const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");
const ListNav = document.querySelectorAll(".ul li a");
const NavbarContainer = document.querySelector(".header-1");
let Arrow = 0;
let ArrayListImage = Object.values(ListImage);

// article budaya makanan wisata
const JudulTentangBudaya2 = document.querySelector(".Tentang-Budaya-Judul");
const JudulTentangMakanan2 = document.querySelector(".Tentang-Makanan-Judul");
const JudulTentangWisata2 = document.querySelector(".Tentang-Wisata-Judul");
const ContainerFigureBudaya2 = document.querySelector(
  ".Container-Figure-Budaya"
);
const ContainerFigureMakanan2 = document.querySelector(
  ".Container-Figure-Makanan"
);
const ContainerFigureWisata2 = document.querySelector(
  ".Container-Figure-Wisata"
);

function ShowDisplay() {
  JudulTentangBudaya2.style.display = "block";
  ContainerFigureBudaya2.style.display = "flex";
  JudulTentangMakanan2.style.display = "block";
  ContainerFigureMakanan2.style.display = "flex";
  JudulTentangWisata2.style.display = "block";
  ContainerFigureWisata2.style.display = "flex";
}

LogoOrangJakarta.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
ListNav.forEach((Links) => {
  Links.addEventListener("click", (e) => {
    e.preventDefault();
    ShowDisplay();
    BurgerNavList.classList.toggle("active-BurgerNav-list");
    let id = e.currentTarget.getAttribute("href").slice(1);
    let element = document.getElementById(id);
    let NavHeight = NavbarContainer.getBoundingClientRect().height;
    let position = element.offsetTop - NavHeight;
    setTimeout(() => {
      window.scrollTo({
        left: 0,
        top: position,
      });
    }, 300);
  });
});
ListMobile.forEach((Links) => {
  Links.addEventListener("click", (e) => {
    e.preventDefault();
    ShowDisplay();
    BurgerNavList.classList.toggle("active-BurgerNav-list");
    let id = e.currentTarget.getAttribute("href").slice(1);
    let element = document.getElementById(id);
    let NavHeight = NavbarContainer.getBoundingClientRect().height;
    let position = element.offsetTop - NavHeight;
    setTimeout(() => {
      window.scrollTo({
        left: 0,
        top: position,
      });
    }, 300);
  });
});
burgerNav.addEventListener("click", () => {
  BurgerNavList.classList.toggle("active-BurgerNav-list");
});
arrowLeft.addEventListener("click", () => {
  Arrow--;
  if (Arrow >= 0) {
    ArrayListImage[Arrow].style.display = "block";
    ArrayListImage[Arrow].classList.add("Active-image-Left");
    let filterImage = ArrayListImage.filter(
      (image) => image.className != ArrayListImage[Arrow].className
    );
    filterImage.forEach((image) => {
      image.classList.remove("Active-image-Left");
      image.classList.remove("Active-image-Right");
      image.style.display = "none";
    });
  } else {
    Arrow = ListImage.length - 1;
    ArrayListImage[Arrow].style.display = "block";
    ArrayListImage[Arrow].classList.add("Active-image-Left");
    let filterImage = ArrayListImage.filter(
      (image) => image.className != ArrayListImage[Arrow].className
    );
    filterImage.forEach((image) => {
      image.classList.remove("Active-image-Left");
      image.classList.remove("Active-image-Right");
      image.style.display = "none";
    });
  }
});
arrowRight.addEventListener("click", () => {
  Arrow++;
  if (Arrow >= ListImage.length) {
    Arrow = 0;
    ArrayListImage[Arrow].style.display = "block";
    ArrayListImage[Arrow].classList.add("Active-image-Right");
    let filterImage = ArrayListImage.filter(
      (image) => image.className != ArrayListImage[Arrow].className
    );
    filterImage.forEach((image) => {
      image.classList.remove("Active-image-Left");
      image.classList.remove("Active-image-Right");
      image.style.display = "none";
    });
  } else {
    ArrayListImage[Arrow].style.display = "block";
    ArrayListImage[Arrow].classList.add("Active-image-Right");
    let filterImage = ArrayListImage.filter(
      (image) => image.className != ArrayListImage[Arrow].className
    );
    filterImage.forEach((image) => {
      image.classList.remove("Active-image-Left");
      image.classList.remove("Active-image-Right");
      image.style.display = "none";
    });
  }
});

window.addEventListener("resize", () => {
  if (innerWidth > 971) {
    ArrayListImage.forEach((image) => {
      image.style.display = "block";
      image.classList.remove("Active-image-Left");
      image.classList.remove("Active-image-Right");
    });
  } else {
    ArrayListImage[0].style.display = "block";
    let filterImage = ArrayListImage.filter(
      (image) => image.className != ArrayListImage[0].className
    );
    filterImage.forEach((image) => {
      image.style.display = "none";
      image.classList.remove("Active-image-Left");
      image.classList.remove("Active-image-Right");
    });
  }
});
