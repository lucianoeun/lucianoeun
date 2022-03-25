$(document).ready(function() {
    var diagram = [];
    var box1 =  $('.box1');

    // $('#box').draggable({ helper:'clone', snap:'#main',snapTolerance: 20,});
    // $('#box').draggable({ snap:true, snapMode:'inner'});
    $('.box').draggable({  
        cursor: "move",
        cursorAt: { top: 56, left: 56 },
        snap:true,
        opacity: 0.5
    });

    $('.box2').droppable();
    box1.droppable({
        drop:function(event, ui){
            var node = {
                _id:(new Date).getTime(),
                position: ui.position
            };

            if(ui.helper.hasClass("camisa-1")){
                node.type = "Camisa1";
            }else if(ui.helper.hasClass("camisa-2")){
                node.type = "Camisa2";
            }else if(ui.helper.hasClass("camisa-3")){
                node.type = "Camisa3";
            }

            diagram.push(node);
            //console.log(diagram);
            renderDiagram(diagram)
        }
    });

    function renderDiagram(diagram){
        box1.empty();
        for( var d in diagram){
            var node = diagram[d];
            var html = "";
            if(node.type === "Camisa1"){
                html = "<div class='box'> Camisa 1 </div>";
            }else if(node.type === "Camisa2"){
                html = "<div class='box'> Camisa 2 </div>";
            }else if(node.type === "Camisa3"){
                html = "<div class='box'> Camisa 3 </div>";
            }

            // var dom = $(html).css({
            //     "position":"absolute",
            //     "top": node.position.top,
            //     "left" : node.position.left
            // }).draggable({
            //     stop:function(event, ui){
            //         console.log(ui);
            //     }
            // }).attr("id", node._id);
            // box1.append(dom)
            box1.append(html)
            console.log(node);
        }
    }







});