var carousel = [];
var count = 0;
 carousel = ["img/yeezy-five.jpg", "img/yeezy-two.jpg", "img/yeezy-three.jpg", "img/yeezy-four.jpg", "img/yeezy.jpg"]
$("#right").on("click", function(){
  count = count + 1;
  if( count === carousel.length){
    count = 0;
    $("img").attr("src", carousel[count]);
  }else{
    $("img").attr("src", carousel[count]);
  }
});
$("#left").on("click", function(){
  count = count - 1;

  if( count === -1){
    count = carousel.length-1;
    $("img").attr("src", carousel[count]);
  }else{
    $("img").attr("src", carousel[count]);
  }console.log(count);
});



/*
var myArr = ["img/yeezy.png", "img/yeezy-two.png", "img/yeezy-three.png", "img/yeezy-four.png", "img/yeezy-five.png"];
var count = 0;
$(#right).on("click", function(){
  count = count + 1;
  $("img/yeezy.png").attr("src, myArr[count]");

});  */
 
