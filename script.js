$(document).ready(function () {
    
  $('.btn-burger-menu').click(function() {
      $('.btn-burger-menu').toggleClass('active-one');
  });
    
})

const burgerButton = document.querySelector(".btn-burger-menu");
const headerList = document.querySelector(".header-nav");
const body = document.querySelector("body");

burgerButton.addEventListener('click', () => {
    headerList.classList.toggle('show-burger')
});

burgerButton.addEventListener('click', () => {
    body.classList.toggle('wrapper-body')
});




$(document).ready(function () {
    
    $('.slider-list').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:  $(".recent-previous-button"),
        nextArrow: $(".recent-next-button"),
    });

});

$(document).ready(function () {
    
    $('.member-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        prevArrow:  $(".member-previous-button"),
        nextArrow: $(".member-next-button"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});


