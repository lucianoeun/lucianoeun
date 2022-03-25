$(document).ready(function() {
    $('#box').draggable({ snap:'#main1',snapTolerance: 20,});
    $('#box').draggable({ snap:true, snapMode:'inner'});
    $('#box').draggable({ helper:'clone'});

    $('#main1').droppable();
    $('#main2').droppable({
        drop:function(event, ui){
            var node = {
                _id:(new Date).getTime()
            };
            diagram.push(node);
            console.log(diagram);
        }
    });
});


// $(function() {
    
//     $('#boxa').fadeOut(1000).delay(1000).slideDown(1000);

//     $('#boxb').click(function() {
//         $(this).css('background-color', 'red');
//     })


// });