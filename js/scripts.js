$(document).ready(function(){
$('.slider').slick({
   
rows: 3,
arrows: false,
dots:true,
adaptiveheight: true,
slidesToShow:5,
slidesToScroll: 5,
easing: 'easy',
waitForAnimate: false,
vertical:false,

  
});
document.querySelectorAll(".slick-dots li button").forEach((el, i) => el.textContent = `${1 + i * 30} - ${++i * 30}`);
});

document.querySelector('.burger').addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('is-active');
})