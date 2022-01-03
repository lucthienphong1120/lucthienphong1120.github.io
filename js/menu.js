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
// announcement
var announcement = document.getElementById("announcement");
var announcementContent = document.getElementById("announcement__content");
var okBtn = document.getElementById("announcement__ok");
var closeBtn = document.getElementById("announcement__close");

function hide() {
    announcement.style.display = "none";
}

closeBtn.addEventListener("click", hide);
okBtn.addEventListener("click", hide);
announcement.addEventListener("click", hide);
announcementContent.addEventListener("click", function(event){
    event.stopPropagation();
})
