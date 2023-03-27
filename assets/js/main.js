// Lưu trữ dự liệu thông qua localstorage
window.onload = function() {
	if (localStorage) {
	  document.getElementById('contactForm').addEventListener('submit', function() {
	      var name = document.getElementById('name').value;
        var email = document.getElementById('yourEmail').value;
        var message = document.getElementById('message').value;
	      localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('message', message);
	  });
	}
}






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
