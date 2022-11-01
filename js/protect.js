document.addEventListener("contextmenu", function(e){ // Prevent Right click
    e.preventDefault();
}, false);

document.addEventListener("keydown", function (event){
    if (event.keyCode == 123) { // Prevent F12
        return false;
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 67) { // Prevent Ctrl+Shift+C
        return false;
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
        return false;
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 74) { // Prevent Ctrl+Shift+J
        return false;
    }
    else if (event.ctrlKey && (event.keyCode === 85 || event.keyCode === 117)) { // Prevent Ctrl+U
        return false;
    }
    else {
        return true;
    }
});
