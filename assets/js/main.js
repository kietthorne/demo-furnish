// click menu đến từng phần của website
function getMeto(id) {
    console.log('da goi id: '+ id)
  const element = document.getElementById(id);
  element.scrollIntoView({behavior: 'smooth'}, true);
}

// menu dọc và button menu thay đổi
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
