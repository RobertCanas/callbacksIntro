// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(found)
  //for(var i = 0; i < arr.length; i++) {
  //  if (arr[i] === "Waldo") {
  //    found(arr[i], i);   // execute callback
  //  }
  //)
  //}
}

function actionWhenFound(person, pos) {
  if (person === "Waldo") {
    console.log("Found " + person + " at index " + pos);
  }
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
