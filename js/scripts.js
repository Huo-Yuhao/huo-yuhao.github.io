var header = $('.header'),


        scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 50 && scrolled > scrollPrev ) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});
//скрытие меню при скролле
var MenuItems = $('#MenuItems'),
        scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 50 && scrolled > scrollPrev ) {
        (MenuItems.style.maxHeight == "0px");
        { (MenuItems.style.maxHeight == "35px")}

    } else {
        MenuItems.style.maxHeight = "0px";
    }
    scrollPrev = scrolled;
});
var MenuItems = $('#glavylist'),
        scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 50 && scrolled > scrollPrev ) {
        (glavylist.style.maxHeight == "0px");
        { (glavylist.style.maxHeight == "503px")}

    } else {
        glavylist.style.maxHeight = "0px";
    }
    scrollPrev = scrolled;
});
//активация иконки меню при нажатии на него
document.querySelector('.burger').addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('is-active');
})




//пример из ответов на подобный вопрос
var burger = document.querySelector('.burger');
var MenuItems = document.querySelector('#MenuItems');

const toggleMenu = () => {
  MenuItems.classList.toggle('is-active');
}

burger.addEventListener('click', e => {
  e.stopPropagation();

  toggleMenu();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_MenuItems = target == MenuItems || MenuItems.contains(target);
  let its_burger = target == burger;
  let MenuItems_is_active = MenuItems.classList.contains('is-active');

  if (!its_MenuItems && !its_burger && MenuItems_is_active) {
    toggleMenu();
  }
})


// отключение иконки меню при клике
$(document).click(function (e) {
    var burger = $(".burger");
    if (burger.has(e.target).length === 0){
        burger.removeClass('is-active');
    }
});
//отключение меню при клике
$(document).click(function (e) {
    var container = $("#MenuItems");
    MenuItems.style.maxHeight = "0px";
    if (container.has.length === 0){
        container.style.maxHeight == "0px";
    }
});

//отключение иконки меню при скролле
var burger = $('.burger'),
        scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 50 && scrolled > scrollPrev ) {
        (burger.removeClass('is-active'));
        { (burger.removeClass('is-active'))}

    } else {
        burger.removeClass('is-active');
    }
    scrollPrev = scrolled;
});
