
function notification() {
    console.log(window.innerWidth);
    if(window.innerWidth < 800 ) {
    alert("This Website does not support this screen width");
    }
}

document.addEventListener('click', notification);

