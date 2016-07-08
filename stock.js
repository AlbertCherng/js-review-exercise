function maxFunction(arr){
  var minPrice = arr[0];
  var maxProfit = 0
  for (i = 0; i < arr.length; i++) {
    var price = arr[i];
    if (price < minPrice) {
      minPrice = price;
    }
    if (maxProfit < price - minPrice) {
      maxProfit = (price - minPrice);
    }
  };
  console.log(maxProfit);
}



maxFunction([45, 24, 35, 31, 40, 38, 11])
maxFunction([30, 48, 103, 23, 13, 3 ,32])
maxFunction([3320, 3, 43434343, 23, 13, 3 ,32])
