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

    //---------------------------------------------------------

    // var xmlHttp = new XMLHttpRequest();
    // xmlHttp.open("GET", "game.json", false);
    // xmlHttp.send(null);

    // var element = document.getElementById("content");

    // var object = JSON.parse(xmlHttp.responseText);

    //element.innerHTML = xmlHttp.responseText;

    //element.innerHTML = object;

    //element.innerHTML = object.games[0].titulo;

    let url = "game.json";

    $.getJSON(url, function(response){
        if(response != null || response != undefined){
           
            var lista = [];

            $.each(response, function(key, val){
                lista.push(val);
            })
            console.log(lista);
        }
    })

    $.ajax({
        type:'GET',
        url:'game.json',
        success: function(response){
            $.each(response, function(key, itens){
                console.log(itens)
            })
        }
    });

    $.ajax({
        method:"get",
        dataType:"json",
        url:"game.json",
        success: function(data){
        console.log(data);
        }
    });

    // $.ajax({
    //     type: 'POST',
    //     url: '/form/',
    //     data: {"name":"jonas"},
    //     success: function(data) { alert('data: ' + data); },
    //     contentType: "application/json",
    //     dataType: 'json'
    // });

    // $.ajax({
    //     url: "url", 
    //     type: "POST",
    //     dataType: "json",
    //     contentType: "application/json; charset=utf-8",
    //     data: JSON.stringify({ name: 'value1', email: 'value2' }),
    //     success: function (result) {
    //         // when call is sucessfull
    //      },
    //      error: function (err) {
    //      // check the err for error details
    //      }
    //   })

    












});