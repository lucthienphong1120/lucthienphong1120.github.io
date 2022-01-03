var body = document.getElementById('timeline');
var btn1 = document.getElementById('more-down');
var btn2 = document.getElementById('more-up');
var overlay = document.getElementById('more-overlay');
var height = body.clientHeight;
// console.log(height);
if (height > 600) {
    btn1.style.display = 'block';
    body.style.height = '600px';
	overlay.style.display = 'block';
}
btn1.onclick = function () {
	var isclose = body.clientHeight === 600-2; //is closing
	if (isclose) {
		body.style.height = 'auto'; //mở rộng
		btn1.style.display = 'none';
		btn2.style.display = 'block';
		overlay.style.display = 'none';
	}
}
btn2.onclick = function () {
	var isopen = body.clientHeight === 600-2; //is closing
	if (!isopen) {
		body.style.height = '600px'; //thu gọn
		btn2.style.display = 'none';
		btn1.style.display = 'block';
		overlay.style.display = 'block';
	} 
}