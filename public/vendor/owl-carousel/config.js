$('.owl-banner').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dot: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        560: {
            items: 1
        },
        760: {
            items: 1
        },
        990: {
            items: 1
        },
        1200: {
            items: 1
        },
        1500: {
            items: 1
        }
    }
})

$('.owl-main').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        560: {
            items: 1
        },
        760: {
            items: 1,
            loop: true,
            touchDrag: true,
            mouseDrag: true,
            margin: 0
        },
        990: {
            items: 2
        },
        1200: {
            items: 4,
            loop: false,
            touchDrag: false,
            mouseDrag: false,
            margin: 10
        },
        1500: {
            items: 4,
            loop: false,
            touchDrag: false,
            mouseDrag: false,
            margin: 10
        }
    }
})

$('.owl-sector').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        560: {
            items: 1
        },
        760: {
            items: 1,
            loop: true,
            touchDrag: true,
            mouseDrag: true,
            margin: 0
        },
        990: {
            items: 2
        },
        1200: {
            items: 3
        },
        1500: {
            items: 3,
            loop: false,
            touchDrag: false,
            mouseDrag: false,
            margin: 10
        }
    }
})