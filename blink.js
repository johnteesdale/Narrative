/*function to make background images blink in and out*/

var n = 0;
var i = 0;
var x = 0;

/*$("h1").hover(start,stop);

function start(){
  i = 1;
  console.log("start");
}

function stop(){
  i = 0;
  console.log("stop");
}
*/
function flicker() {
  while ($("h1").is(":hover") === true) {
    n = Math.floor(Math.random() * 1000);
    setTimeout(imageShow, n);
    n = n*2
    setTimeout(imageHide, n);
    console.log("hover");
  }
}

flicker();

/*$("h1").hover(function() {

  console.log("hover on");

  while (i<100) {
    n = Math.floor(Math.random() * 1000);
    setTimeout(imageShow, n);
    n = n*2
    setTimeout(imageHide, n);
    console.log(i);
    i++;
  }
},
    function() {
      $(".thing").css("opacity","1");
      console.log("off");
    }
  );
*/
  function imageShow() {
    $(".thing").css("opacity", ".3");
    console.log("show worked");
  };

  function imageHide(){
      $(".thing").css("opacity", "0");
      console.log("hide worked");
  };
