var elements = document.getElementsByClassName("icon-open-nav");
elements[0].addEventListener('click', function() {
    var nav = document.getElementById('block-nav__content')
    nav.style.display = 'block'
}, false);

var elementss = document.getElementsByClassName("close-icon");
elementss[0].addEventListener('click', function() {
    //block-nav__content
    var nav = document.getElementById('block-nav__content')
    nav.style.display = 'none'
}, false);