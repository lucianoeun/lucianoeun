$(function() {
      $("#btnlock").click(function(){
            $('#popup-bcg').css("display","block")
            $('#popup-card').css("display","flex")
      });
      $("#fbtnx").click(function(){
        $('#popup-bcg').css("display","none")
        $('#popup-card').css("display","none")
  });
});