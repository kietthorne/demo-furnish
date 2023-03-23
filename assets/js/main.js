// click menu đến từng phần của website
function getMeto(id) {
  console.log("da goi id: " + id);
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" }, true);
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

// Slide sản phẩm của product





// hiệu ứng chuyển slide lorem-play-video




// Khi người dùng cuộn xuống 20px từ đầu tài liệu, hãy hiển thị nút back-to-top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Khi người dùng nhấp vào nút, hãy cuộn lên đầu tài liệu
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
