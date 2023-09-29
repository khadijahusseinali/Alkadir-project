$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 70,
    nav:false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        992:{
            items:3
        }
        
    }
})