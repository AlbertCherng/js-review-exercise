var i = 0;
setInterval( function() {
  console.log(i);
  i++;
  if (i >= 3) {clearInterval(this)}
  }, 1000 );