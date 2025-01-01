
const bar = document.getElementById('bar');
const navb = document.getElementById('navbar');
const xmark = document.getElementById("xmark");

if (bar) {
    bar.addEventListener('click', () => {
        navb.classList.add('active');
    })
}
if(xmark){
    xmark.addEventListener("click", () => {
        navb.classList.remove("active");
    })
}




// script to the single product details

