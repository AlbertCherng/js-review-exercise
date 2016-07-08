// var i = 0;
// setInterval( function() {
//   console.log(i);
//   i++;
//   if (i >= 3) {clearInterval(this)}
//   }, 1000 );


for (var i = 0; i < 3; i++){
  (function(){
    var j = i;
    setTimeout(function () {console.log(j)}, 1000 * i);
     }) ();
}