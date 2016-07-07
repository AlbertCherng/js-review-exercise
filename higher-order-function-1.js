var finalArr = [];

function map (arr, cb) {
  for (word of arr) {
    finalArr.push(cb(word));
  };
}

map(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length });

console.log(finalArr);



//[5, 7, 2, 5, 3]