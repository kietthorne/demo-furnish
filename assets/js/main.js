


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

function display() {
  if (document.myForm.name.value == '')
  return false;
  // When it returns false - your form will not submit and will not redirect too
else
  return true;
// Khi nó trả về true - biểu mẫu sẽ gửi và sẽ chuyển hướng
// (actually it's a part of submit) id you have mentioned in action
}


form.addEventListener('submit', (event) => {
  // Chặn reload trang khi submit form
  event.preventDefault();
})

function showten() {
  var name = document.getElementById('name').value;
  var str = 'Hello' + ' ' + name + ' ' +'.'
  document.getElementById('demo').innerHTML = str;
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
