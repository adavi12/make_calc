$(function(){
  console.log("jQuery is working");

  
  var calcObj = {
    x: 0,
    operator: '',
    y: 0
  };
  $('.operator').on('click', function(){
    calcObj.operator = $(this).attr('id');
  });
  $("#equals").on('click',function(){
    calcObj.x = $("#num1").val();
    calcObj.y = $("#num2").val();

    $("#clear").on("click", clearNumbers);

    console.log(calcObj);
    $.ajax({

      type: "POST",

      url: "/routes/calculate/"+ calcObj.operator,

      data: calcObj,
      success: function(calc){
        console.log(calcObj);
        showMath(calc);

      }
    });
  });
});//end of doc ready
function showMath (calc){
  $.ajax({
    type: "GET",
    url: "/routes/calculate/",
    success: function(calc){
      console.log(calc);
      $("#answerDiv").text(calc.answer);
    }
  });
}

function clearNumbers(){
  $("#answerDiv").empty();
}
