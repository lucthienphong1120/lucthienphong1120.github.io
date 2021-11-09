//toast function
function toast({ title, message, type, duration }) {
    var main = document.getElementById('toast');
    var toast = document.createElement('div');
    var timeautoremove = 3000;
    // auto remove after time
    var autoremove = setTimeout(function () {
        main.removeChild(toast);        //xoá thông báo
    }, duration + timeautoremove);
    //remove when click
    toast.onclick = function (event) {
        if (event.target.closest('.toast__close')) {
            main.removeChild(toast);    //xoá thông báo
            clearTimeout(autoremove);   //xoá auto remove
        }
    };
    //call variable
    var icons = {
        success: 'fa fa-check-circle',
        error: 'fa fa-exclamation-circle'
    };
    var icon = icons[type];
    var delay = (duration / 1000);
    toast.classList.add('toast', `toast--${type}`);
    toast.style.animation = `slideInLeft linear 0.5s,fadeOut linear 1s ${delay}s forwards`;
    //add code
    toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fa fa-times"></i>
                    </div>
                `;
    main.appendChild(toast);    //add child
}

function showSuccessToast() {
    toast({
        title: 'Success!',
        message: 'Bạn đã đăng ký thành công',
        type: 'success',
        duration: 3000
    });
}
function showErrorToast() {
    toast({
        title: 'Error!',
        message: 'Thất bại, đã có lỗi xảy ra',
        type: 'error',
        duration: 3000
    });
}