// $(document).ready(function() {
//     alert('Olá mundo');
// });


$(function() {
    
    $('#boxa').fadeOut(1000).delay(1000).slideDown(1000);

    $('#boxb').click(function() {
        $(this).css('background-color', 'red');
    })


});