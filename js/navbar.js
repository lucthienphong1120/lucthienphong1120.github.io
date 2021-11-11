var header = document.getElementById('header-navbar');
var menu = document.getElementById('menu-btn');
// var height = header.clientHeight;
var check = true;
menu.onclick = function () {
	// var close = header.clientHeight === height;
	// console.log(height);
	if (check) {
		header.style.height = 'auto'; //mở
		check = false;
	}
	else {
		header.style.height = null; //đóng
		check = true;
	}
}