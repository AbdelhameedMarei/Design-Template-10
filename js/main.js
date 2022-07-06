// Sticky Navbar
let head = document.getElementById('head');

window.addEventListener('scroll', function () {
    head.classList.toggle("sticky", window.scrollY > 0);
})



// Year Now In Footer
let year = document.getElementById('year-now');

let dateNow = new Date();

year.innerHTML = dateNow.getFullYear();


//Scroll To Top
let btn = document.getElementById('up');

window.onscroll = function () {

    if ( window.scrollY > 700 ) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}

btn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}


