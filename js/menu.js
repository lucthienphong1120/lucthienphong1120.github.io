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
var typeTitle = document.querySelector('.type-title');
var typeName = document.querySelector('.type-name');

if(document.body.clientWidth <= 400) {
    announcement.style.display = "none";
	typeTitle.style.animation = "type5 1.5s steps(40,end) 1.5s forwards";
	typeName.style.animation = "shring 2s steps(40,end) 2s forwards, blink5 .5s step-end infinite alternate";
	document.body.classList.remove('disable-scroll');
}

function hide() {
    announcement.style.display = "none";
	typeTitle.style.animation = "type5 1.5s steps(40,end) forwards";
	typeName.style.animation = "shring 2s steps(40,end) forwards, blink5 .5s step-end infinite alternate";
	document.body.classList.remove('disable-scroll');
}

closeBtn.addEventListener("click", hide);
okBtn.addEventListener("click", hide);
announcement.addEventListener("click", hide);
announcementContent.addEventListener("click", function(event){
    event.stopPropagation();
})
