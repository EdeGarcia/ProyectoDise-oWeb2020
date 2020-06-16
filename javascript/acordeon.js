$(document).ready(function(){
    $('.texto1,.texto2,.texto3,.texto4,.texto5').hide();

    $('.titulo1').on('click', function(){
        $('.texto1').slideToggle();
    })

    $('.titulo2').on('click', function(){
        $('.texto2').slideToggle();
    })

    $('.titulo3').on('click', function(){
        $('.texto3').slideToggle();
    })

    $('.titulo4').on('click', function(){
        $('.texto4').slideToggle();
    })

    $('.titulo5').on('click', function(){
        $('.texto5').slideToggle();
    })
})