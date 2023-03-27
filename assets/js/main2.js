// // click menu đến từng phần của website
// function getMeto(id) {
//     console.log('da goi id: '+ id)
//   const element = document.getElementById(id);
//   element.scrollIntoView({behavior: 'smooth'}, true);
// }

// Add active class to the current tag a menu2, close menu2 and change icon của btnMobi
var menu2 = document.getElementById("menu2");
var nav2s = menu2.getElementsByClassName("nav2");
var bntMobi = document.querySelector(
  "body > div > header > div.header-content2 > div.icon-nav"
);
console.log("nav2s", nav2s);
console.log("btnMobi", bntMobi);
for (var n = 0; n < nav2s.length; n++) {
  nav2s[n].addEventListener("click", function () {
    var current1 = document.getElementsByClassName("active2");
    current1[0].className = current1[0].className.replace(" active2", "");
    console.log("cur-->", current1[0]);
    this.className += " active2";
    menu2.style.display = "none";
    bntMobi.classList.toggle("change");
  });
}

// Add active class to the current tag a menu1
var menu = document.getElementById("menu1");
var navs = menu.getElementsByClassName("nav");
console.log("navs", navs);
for (var i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    console.log("cur-->", current[0]);
    this.className += " active1";
  });
}

// menu dọc và button menu thay đổi của header
function navMobiandChangeBtn(x) {
  var y = document.getElementById("menu2");
  if (y.style.display === "block") {
    x.classList.toggle("change");
    y.style.display = "none";
  } else {
    x.classList.toggle("change");
    y.style.display = "block";
  }
}

// open tab menu của group products
function openTabGroup(evt, tabName, element) {
  var i, tabcontent, tablink;
  tabcontent = document.getElementsByClassName("group-products");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablink = document.getElementsByClassName("link-group-pro");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// lấy element tab a có id="defaultOpen" -> mặc định khi mở trang web
document.getElementById("defaultOpen").click();

//controls slide của portfolio
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(a) {
  showSlides((slideIndex += a));
}

function showSlides(a) {
  let b;
  let slides = document.getElementsByClassName("slide-por");
  if (a > slides.length) {
    slideIndex = 1;
  }
  if (a < 1) {
    slideIndex = slides.length;
  }
  for (b = 0; b < slides.length; b++) {
    slides[b].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Control of btNext & btPrev
// function btnNextProduct(tabAllProducts) {
//   const btnNext = document.querySelector(`.next`);
//   const btnPrev = document.querySelector(`.previous`);
//   // console.log(btnNext,btnPrev);
//   const products = document.querySelectorAll(`#${tabAllProducts} .product`);
//   console.log(products);
//   let actives = []; // Danh sách index của các products đang hiện;
//   if (products) {
//     for (let i = 0; i < products.length; i++) {
//       if (products[i].style.display === "block") {
//         actives.push(i);
//       }
//       console.log('---->',actives);
//     }
//   }

//   if (actives[2] + 1 == products.length - 1) {
//     btnNext.className =  btnNext.className += " disable";
//     btnPrev.className = btnPrev.className.replace(" disable", "");
//     // element.setAttribute("disabled", true);
//   }
//   else {
//      btnNext.className =  btnNext.className.replace(" disable", "");
//     // element.setAttribute("disabled", false);
//   }

//   if (actives[0] - 1 == 0) {
//      btnPrev.className = btnPrev.className += " disable";
//   }
//   else {
//      btnPrev.className = btnPrev.className.replace(" disable", "");
//   }
//   if (btnNext) {
//     products[actives[0]].style.display = 'none'; // Hidden product đầu
//     console.log('p--->',actives[0]);
//     products[actives[2] + 1].style.display = 'block'; // Show product tiếp theo
//     console.log('p--->',[actives[2]+1]);
//   }
//   else {
//     products[actives[0] - 1].style.display = 'block' // Show product đầu
//     products[actives[actives.length - 1]].style.display = 'none' // Hidden product cuối

//   }
// }

// function btnPrevProduct(tabAllProducts,element) {
//   const btnNext = document.querySelector(`.next`);
//   const btnPrev = document.querySelector(`.previous`);
//   // console.log(btnNext,btnPrev);
//   const products = document.querySelectorAll(`#${tabAllProducts} .product`);
//   console.log(products);
//   let actives = []; // Danh sách index của các products đang hiện;
//   if (products) {
//     for (let i = 0; i < products.length; i++) {
//       if (products[i].style.display === "block") {
//         actives.push(i);
//       }
//       console.log('---->',actives);
//     }
//   }
//   if (element === btnPrev && actives[0] - 1 === 0) {
//     element.className = element.className += " disable";
//   }
//   else {
//     element.className = element.className.replace(" disable", "");
//   }
//   if (element === btnNext && actives[2] + 1 === products.length - 1) {
//     element.className = element.className += " disable";
//     // element.setAttribute("disabled", true);
//   }
//   else {
//     element.className = element.className.replace(" disable", "");
//     // element.setAttribute("disabled", false);
//   }
//   if (element === btnPrev) {
//     products[actives[0] - 1].style.display = 'block' // Show product đầu
//     products[actives[actives.length - 1]].style.display = 'none' // Hidden product cuối
//   }
//   else {
//     products[actives[0]].style.display = 'none'; // Hidden product đầu
//     console.log('p--->',actives[0]);
//     products[actives[2] + 1].style.display = 'block'; // Show product tiếp theo
//     console.log('p--->',[actives[2]+1]);
//   }
// }

// khai báo biến 2 control slide
// const btnNext = document.querySelector(`.next`);
// const btnPrev = document.querySelector(`.previous`);

// arrow function cho button next và previous
// btnNext.onclick = () => {
//   const items = document.querySelectorAll(`#slide-gr1 .product`);
//   if(items) {
//     let actives = [] // Danh sách index của các item đang hiện
//     console.log('---->',items)
//     for (let  i = 0;  i < items.length; i++) {
//       console.log('---->',items[i])
//       if(items[i].style.display === "block") actives.push(i)
//       }
//       console.log(actives);
//       // Disabled btn
//       console.log('a===',(actives[2]+1));
//       if(actives[2] + 1 === items.length - 1) {
//         console.log ('b==----->', btnNext);
//         btnNext.disabled = true;
//       } else {
//         btnNext.disabled = false;
//       }
//       if(actives[0] - 1 === 0) {
//         console.log ('b==----->', btnPrev);
//         btnPrev.disabled = true;
//       } else {
//         btnPrev.disabled = false;
//       }
//       items[actives[0]].style.display = 'none' // Hidden item đầu
//       items[actives[2] + 1].style.display = 'block' // Show item tiếp theo
//     }
//   }

// btnPrev.onclick = () => {
//   const items = document.querySelectorAll(`#slide-gr1 .product`);
//   if(items) {
//     let actives = [] // Danh sách index của các item đang hiện
//     console.log('---->',items)
//     for (let  i = 0;  i < items.length; i++) {
//       console.log('---->',items[i])
//       if(items[i].style.display === "block") actives.push(i)
//       }
//       console.log(actives);
//       // Disabled btn
//       if(actives[2] + 1 === items.length - 1) {
//         console.log ('b==----->', btnNext);
//         btnNext.disabled = true;
//       } else {
//         btnNext.disabled = false;
//       }
//       if(actives[0] - 1 === 0) {
//         console.log ('b==----->', btnPrev);
//         btnPrev.disabled = true;
//       } else {
//         btnPrev.disabled = false;
//       }
//       items[actives[0] - 1].style.display = 'block' // Hidden item đầu
//       // console.log('itempre',itmes[actives[0] -1]);
//       items[actives[actives.length - 1]].style.display = 'none' // Show item tiếp theo
//     }
//   }

// Slide Home
var slideIndexHome; // slide hiện tại
// Hàm hiển thị slide
function showSlideHome() {
  var i;
  var slidesHome = document.getElementsByClassName("slide");
  console.log(slidesHome);
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slidesHome.length; i++) {
    slidesHome[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activedot", "");
  }

  slidesHome[slideIndexHome].style.display = "flex";
  dots[slideIndexHome].className += " activedot";
  //chuyển đến slide tiếp theo
  slideIndex++;
  //nếu đang ở slide cuối cùng thì chuyển về slide đầu
  if (slideIndexHome > slidesHome.length - 1) {
    slideIndexHome = 0;
  }
}

//mặc định hiển thị slide đầu tiên
showSlideHome((slideIndexHome = 0));

function currentSlide(n) {
  showSlideHome((slideIndexHome = n));
}

function onChangeSlide(navigate, tabAllProducts, groups) {
  const products = document.querySelectorAll(`#${tabAllProducts} .product`);
  console.log("products", products);
  if (products) {
    let actives = []; // Danh sách index của các item đang hiện
    for (let i = 0; i < products.length; i++) {
      if (products[i].style.display === "block") actives.push(i);
    }

    //Disabled btn
    const btnNext = document.querySelector(`#${groups} .next`);
    console.log(btnNext);
    const btnPrivous = document.querySelector(`#${groups} .previous`);
    if (actives[2] + (navigate === "next" ? 1 : -1) === products.length - 1) {
      btnNext.disabled = true;
      // btnNext.className += " disable";
    } else {
      btnNext.disabled = false;
      // btnNext.className.replace(" disable", "");
    }
    if (actives[0] + (navigate === "previous" ? -1 : 1) === 0) {
      btnPrivous.disabled = true;
      // btnPrivous.className += " disable";
    } else {
      btnPrivous.disabled = false;
      // btnPrivous.className.replace(" disable", "");
    }

    if (navigate === "next") {
      products[actives[0]].style.display = "none"; // Hidden item đầu
      console.log(products[actives[0]]);
      products[actives[2] + 1].style.display = "block"; // Show item tiếp theo
    } else {
      products[actives[0] - 1].style.display = "block"; // Hidden item đầu
      products[actives[actives.length - 1]].style.display = "none"; // Show item tiếp theo
    }
  }
}
