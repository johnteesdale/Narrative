function begin() {
  $("h1").hide();
  $("h4").hide();
  $("#intro").show();
  setTimeout(function() {$("#intro1").fadeIn(2000)}, 1000);
  setTimeout(function() {$("#intro1").fadeOut(2000)}, 5000);
  setTimeout(function() {$("#intro2").fadeIn(2000)}, 5000);
  setTimeout(function() {$("#intro2").fadeOut(2000)}, 9000);
  setTimeout(function() {$("#intro3").fadeIn(2000)}, 9000);
  setTimeout(function() {$("#intro3 span").css("opacity", "1")}, 11000);
  setTimeout(introOut, 15000);
};

function introOut() {
  $("#intro3").fadeOut(4000);
  setTimeout(function(){$("#intro").hide()}, 4500);
  setTimeout(firstChoice, 4500);
}

function firstChoice(){
  $("#one").fadeIn(2000);
  console.log("firstChoice");
}

function secondChoice(){
  $("#two").fadeIn(2000);
  console.log("firstChoice");
}

function thirdChoice(){
  $("#three").fadeIn(2000);
  console.log("firstChoice");
}

function fourthChoice(){
  $("#four").fadeIn(2000);
  console.log("firstChoice");
}

function optionOneA() {
  $("#one").hide();
  $("#oneA").show();
  setTimeout(function() {$("#oneA1").fadeIn(2000)}, 1000);
  setTimeout(function() {$("#oneA1").fadeOut(1000)}, 5000);
  setTimeout(function() {$("#oneA2").fadeIn(2000)}, 6000);
  setTimeout(function() {$("#oneA2").fadeOut(1000)}, 15000);
  setTimeout(function() {$("#oneA3").fadeIn(2000)}, 15000);
  setTimeout(optionOneAOut, 14000);
}

function optionOneAOut() {
  setTimeout(function() {$("#oneA3").fadeOut(4000)}, 4000);
  setTimeout(function(){$("#oneA").hide()}, 4500);
  setTimeout(secondChoice, 4500);
}

function optionOneB() {
  $("#one").hide();
  $("#oneB").show();
  setTimeout(function(){$("#oneB1").fadeIn(2000)}, 1000);
  setTimeout(function(){$("#oneB1").fadeOut(2000)}, 5000);
  setTimeout(function(){$("#oneB2").fadeIn(2000)}, 5000);
  setTimeout(function(){$("#oneB2").fadeOut(2000)}, 10000);
  setTimeout(function(){$("#oneB3").fadeIn(2000)}, 10000);
  setTimeout(function(){$("#oneB3").fadeOut(2000)}, 14000);
  setTimeout(function(){$("#oneB4").fadeIn(2000)}, 15000);
  setTimeout(optionOneBOut, 19000);
}

function optionOneBOut() {
  $("#oneB4").fadeOut(4000);
  setTimeout(function(){$("#oneB").hide()}, 4000);
  setTimeout(secondChoice, 4500);
}

function optionTwoA() {
  $("#two").hide();
  $("#twoA").show();
  setTimeout(function(){$("#twoA1").fadeIn(2000)}, 1000);
  setTimeout(function(){$("#twoA1").fadeOut(2000)}, 8000);
  setTimeout(function(){$("#twoA2").fadeIn(2000)}, 8000);
  setTimeout(function(){$("#twoA2").fadeOut(2000)}, 16000);
  setTimeout(function(){$("#twoA3").fadeIn(2000)}, 16000);
  setTimeout(function(){$("#twoA3").fadeOut(2000)}, 22000);
  setTimeout(function(){$("#twoA4").fadeIn(2000)}, 22000);
  setTimeout(function(){$("#twoA4").fadeOut(2000)}, 29000);
  setTimeout(function(){$("#twoA5").fadeIn(2000)}, 290000);
  setTimeout(optionTwoAOut, 36500);
}

function optionTwoAOut() {
  $("#twoA5").fadeOut(2000);
  setTimeout(function(){$("#twoA").hide()}, 2000);
  setTimeout(playTwoC, 3500);
  /*need to  point to twoC*/
}

function optionTwoB() {
  $("#two").hide();
  $("#twoB").show();
  setTimeout(function(){$("#twoB1").fadeIn(2000)}, 1000);
  setTimeout(function(){$("#twoB1").fadeOut(2000)}, 8000);
  setTimeout(function(){$("#twoB2").fadeIn(2000)}, 8000);
  setTimeout(function(){$("#twoB2").fadeOut(2000)}, 18000);
  setTimeout(function(){$("#twoB3").fadeIn(2000)}, 18000);
  setTimeout(function(){$("#twoB3").fadeOut(2000)}, 23000);
  setTimeout(function(){$("#twoB4").fadeIn(2000)}, 23000);
  setTimeout(optionTwoBOut, 23500);
}

function optionTwoBOut() {
  $("#twoB4").fadeOut(2000);
  setTimeout(function(){$("#twoB").hide()}, 2000);
  setTimeout(playTwoC, 4500);
  /*need to  point to twoC*/
}

function playTwoC() {
  $("#twoC").show();
  $("#twoC-partOne").show();
  setTimeout(function(){$("#twoC1").fadeIn(2000)}, 1000);
  setTimeout(function(){$("#twoC1").fadeOut(2000)}, 8000);
  setTimeout(function(){$("#twoC2").fadeIn(2000)}, 8000);
  setTimeout(function(){$("#twoC2").fadeOut(2000)}, 18000);
  setTimeout(function(){$("#twoC3").fadeIn(2000)}, 10000);
  setTimeout(function(){$("#twoC3").fadeOut(2000)}, 15000);
  setTimeout(function(){$("#twoC4").fadeIn(2000)}, 19000);
  setTimeout(function(){$("#twoC4").fadeOut(2000)}, 26000);
  setTimeout(function(){$("#twoC-partOne").hide()}, 26000);
  $("#twoC-partTwo").show();
  setTimeout(function(){$("#twoC5").fadeIn(2000)}, 26000);
  setTimeout(function(){$("#twoC5").fadeOut(2000)}, 34000);
  setTimeout(function(){$("#twoC6").fadeIn(2000)}, 34000);
  setTimeout(function(){$("#twoC6").fadeOut(2000)}, 41000);
  setTimeout(function(){$("#twoC7").fadeIn(2000)}, 41000);
  setTimeout(function(){$("#twoC7").fadeOut(2000)}, 112000);
  setTimeout(function(){$("#twoC8").fadeIn(2000)}, 48000);
  setTimeout(function(){$("#twoC8").fadeOut(2000)}, 61000);
  setTimeout(function(){$("#twoC9").fadeIn(2000)}, 55000);
  setTimeout(function(){$("#twoC9").fadeOut(2000)}, 63000);
  setTimeout(function(){$("#twoC10").fadeIn(2000)}, 63000);
  setTimeout(function(){$("#twoC10").fadeOut(2000)}, 74000);
  setTimeout(function(){$("#twoC11").fadeIn(2000)}, 70000);
  setTimeout(function(){$("#twoC11").fadeOut(2000)}, 76000);
  setTimeout(function(){$("#twoC12").fadeIn(2000)}, 76000);
  setTimeout(function(){$("#twoC12").fadeOut(2000)}, 88000);
  setTimeout(function(){$("#twoC13").fadeIn(2000)}, 83000);
  setTimeout(function(){$("#twoC13").fadeOut(2000)}, 90000);
  setTimeout(function(){$("#twoC14").fadeIn(2000)}, 97000);
  setTimeout(function(){$("#twoC14").fadeOut(2000)}, 110000);
  setTimeout(function(){$("#twoC15").fadeIn(2000)}, 104000);
  setTimeout(function(){$("#twoC15").fadeOut(2000)}, 112000);
  setTimeout(thirdChoice, 112000);
}

function optionThreeA() {
  $("#three").hide();
  $("#threeA").show();
  setTimeout(function(){$("#threeA1").fadeIn(2000)}, 1000);
  setTimeout(function(){$("#threeA1").fadeOut(2000)}, 7000);
  setTimeout(function(){$("#threeA2").fadeIn(2000)}, 7000);
  setTimeout(function(){$("#threeA2").fadeOut(2000)}, 15000);
  setTimeout(function(){$("#threeA3").fadeIn(2000)}, 15000);
  setTimeout(function(){$("#threeA3").fadeOut(2000)}, 21000);
  setTimeout(function(){$("#threeA4").fadeIn(2000)}, 20000);
  setTimeout(function(){$("#threeA4").fadeOut(2000)}, 26000);
  setTimeout(function(){$(".repeat").fadeOut(0)}, 26000);
  setTimeout(function(){$("#threeA5").fadeIn(2000)}, 26000);
  setTimeout(function(){$(".ring1").fadeIn(1000)}, 27000);
  setTimeout(function(){$(".ring2").fadeIn(1000)}, 27000);
  setTimeout(function(){$(".ring3").fadeIn(1000)}, 27000);
  setTimeout(function(){$(".ring4").fadeIn(1000)}, 27500);
  setTimeout(function(){$(".ring5").fadeIn(1000)}, 28000);
  setTimeout(function(){$(".ring6").fadeIn(1000)}, 28500);
  setTimeout(function(){$(".ring7").fadeIn(1000)}, 29000);
  setTimeout(function(){$(".ring8").fadeIn(1000)}, 30000);
  setTimeout(function(){$(".ring9").fadeIn(1000)}, 32000);
  setTimeout(function(){$("#threeA5").fadeOut(2000)}, 40000);
  setTimeout(function(){$("#threeA6").fadeIn(2000)}, 40000);
  setTimeout(optionThreeAOut, 31500);
}

function optionThreeAOut() {
  $("#threeA5").fadeOut(2000);
  setTimeout(function(){$("#threeA").hide()}, 2000);
  setTimeout(fourthChoice, 4500);
  /*need to  point to threeC*/
}

function optionThreeB() {
  $("#three").hide();
  $("#threeB").show();
  setTimeout(function(){$("#threeB1").fadeIn(2000)}, 1000);
  setTimeout(function(){$("#threeB1").fadeOut(2000)}, 7000);
  setTimeout(function(){$("#threeB2").fadeIn(2000)}, 7000);
  setTimeout(function(){$("#threeB2").fadeOut(2000)}, 14000);
  setTimeout(function(){$("#threeB3").fadeIn(2000)}, 14000);
  setTimeout(function(){$("#threeB3").fadeOut(2000)}, 21000);
  setTimeout(function(){$("#threeB4").fadeIn(2000)}, 21000);
  setTimeout(function(){$("#threeB4").fadeOut(2000)}, 28000);
  setTimeout(function(){$("#threeB5").fadeIn(2000)}, 28000);
  setTimeout(optionThreeBOut, 35500);
}

function optionThreeBOut() {
  $("threeB5").fadeOut(2000);
  setTimeout(function(){$("#threeB").hide()}, 2000);
  setTimeout(fourthChoice, 4500);
  /*need to  point to threeC*/
}

function optionFourA() {
  $("#four").hide();
  $("#fourA").show();
  $("#fourA-partOne").fadeIn(2000);
  setTimeout(function(){$("#fourA1").fadeIn(2000)}, 1000);
  setTimeout(function(){$("#fourA1").fadeOut(2000)}, 7000);
  setTimeout(function(){$("#fourA2").fadeIn(2000)}, 7000);
  setTimeout(function(){$("#fourA2").fadeOut(2000)}, 14000);
  setTimeout(function(){$("#fourA3").fadeIn(2000)}, 14000);
  setTimeout(function(){$("#fourA3").fadeOut(2000)}, 20000);
  setTimeout(function(){$("#fourA4").fadeIn(2000)}, 20000);
  setTimeout(function(){$("#fourA4").fadeOut(2000)}, 27000);
  setTimeout(function(){$("#fourA5").fadeIn(2000)}, 27000);
  setTimeout(function(){$("#fourA5").fadeOut(2000)}, 35000);
  setTimeout(function() {$("#fourA-partOne").fadeout(2000)}, 35000);
  setTimeout(function() {$("#fourA-partTwo").fadein(2000)}, 35000);
  setTimeout(function(){$("#fourA6").fadeIn(2000)}, 36000);
  setTimeout(function(){$("#fourA6").fadeOut(2000)}, 43000);
  setTimeout(function(){$("#fourA7").fadeIn(2000)}, 43000);
  setTimeout(function(){$("#fourA7").fadeOut(2000)}, 50000);
  setTimeout(function(){$("#fourA8").fadeIn(2000)}, 50000);
  setTimeout(function(){$("#fourA8").fadeOut(2000)}, 56000);
  setTimeout(function(){$("#fourA9").fadeIn(2000)}, 56000);
  setTimeout(function(){$("#fourA9").fadeOut(2000)}, 68000);
  setTimeout(function(){$("#fourA").hide()}, 70000);
  setTimeout(function(){$("#landingScreen").show()},71000);
  setTimeout(function(){$("h1").show()},71000);
  setTimeout(function(){$("h4").show()},71000);
}

function optionFourB() {
  $("#four").hide();
  $("#fourB").show();
  setTimeout(function(){$("#fourB1").fadeIn(2000)}, 1000);
  setTimeout(function(){$("#fourB1").fadeOut(2000)}, 6000);
  setTimeout(function(){$("#fourB2").fadeIn(2000)}, 6000);
  setTimeout(function(){$("#fourB2").fadeOut(2000)}, 11000);
  setTimeout(function(){$("#fourB3").fadeIn(200)}, 11000);
  setTimeout(function(){$("#fourB3").fadeOut(2000)}, 17000);
  setTimeout(function(){$("#fourB4").fadeIn(200)}, 17000);
  setTimeout(function(){$("#fourB4").fadeOut(2000)}, 24000);
  setTimeout(function(){$("#fourB5").fadeIn(200)}, 24000);
  setTimeout(function(){$("#fourB5").fadeOut(2000)}, 30000);
  setTimeout(function(){$("#fourB6").fadeIn(200)}, 30000);
  setTimeout(function(){$("#fourB6").fadeOut(2000)}, 37000);
  setTimeout(function(){$("fourB").hide(2000)}, 38000);
  setTimeout(function(){$("#landingScreen").show()},39000);
  setTimeout(function(){$("h1").show()},40000);
  setTimeout(function(){$("h4").show()},40000);
}
