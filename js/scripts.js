$(function(){
  $("#quiz").submit(function(event){
    event.preventDefault();
    var color = $("#color").val();
    var age = parseInt($("#age").val());
    var number = parseInt($("#number").val());

    $(".celeb").hide();
    if (age && name && number){
      if (color === "#000000") {
        $(".natasha").show();
      } else if (age > 45 && number > 100 ) {
        $(".tonyStark").show();
        console.log("This part is working")
      } else {
        $(".natasha").show();

      };
    } else {
      alert("Please fill in all fields")
    }
  });

});
