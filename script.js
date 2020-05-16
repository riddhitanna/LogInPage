function login(){
  $("#container").fadeIn("2");
  $("#login-icon").fadeOut();
  $(".close-btn").fadeIn("2");
  $("html").css("background","opacity:0.5");
}

function closed(){
  $("#container").fadeOut();
  $("#fcontainer").css("display","none");
  $("#login-icon").fadeIn();
  
}

function clicked(){

var emppass = document.forms["f1"]["password"].value;
$("#container").fadeOut();
alert("WELCOME!");
}


function forgotten(){
  $("#container").fadeOut(function(){
    $("#fcontainer").css("display","initial");
  });
}
  
function newpass(){
  alert("Please check your inbox for instructions to reset your password");
}
  


