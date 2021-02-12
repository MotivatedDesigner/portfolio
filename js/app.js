// new fullpage('#fullpage',{
//     autoScrolling:true,
//     anchors: ['s1', 's2'],
//     responsive: 900,
//     navigation: true,
//     navigationPosition: 'right',
//     navigationTooltips: ['Section 0', 'Section 1'],
// });


$(document).ready(function () {


    $('.fade').slick({
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });


    var prevScrollpos = window.pageYOffset;
    const nav = document.querySelector("nav");
    // var isActive = false;

    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            nav.style.top = "0";
            // isActive = true;
        } else {
            nav.style.top = "-125px";
            // isActive = false;
        }
        prevScrollpos = currentScrollPos;
        if (window.scrollY != 0) {
            nav.classList.add("nav-active");
        } else {
            nav.classList.remove("nav-active");
        }
    }

});

const burger = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-list li a');
const nav = document.querySelector('nav');
const ligne = document.querySelector('.cont-line');


burger.addEventListener('click', () => {

    ligne.classList.toggle('active');
    nav.classList.toggle('menu-visible');
    navList.classList.toggle('nav-visible');
    navList.classList.toggle('nav-hide');
    navItems.forEach(item => {
        item.classList.toggle('nav-list-visible'); 
    });

});