var header = document.getElementById('header-navbar');
var menu = document.getElementById('menu-btn');
var height = header.clientHeight;
menu.onclick = function () {
	var close = header.clientHeight === height;
	if (close) {
		header.style.height = 'auto'; //mở
	}
	else {
		header.style.height = null; //đóng
	}
}
//chọn menu
var items = document.querySelectorAll('#header-navbar li');
for (var i = 0; i < items.length; i++) {
	var item = items[i];
	item.onclick = function (event) {
		header.style.height = null; //đóng
	}
}