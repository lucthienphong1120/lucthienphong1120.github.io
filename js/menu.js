// navbar
var header = document.getElementById('header-navbar');
var menu = document.getElementById('menu-btn');
var check = true;
menu.onclick = function () {
	if (check) {
		header.style.height = 'auto'; //mở
		check = false;
	}
	else {
		header.style.height = null; //đóng
		check = true;
	}
}
