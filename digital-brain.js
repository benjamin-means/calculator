window.addEventListener("click", calculate);

var current = "";
var total = 0;
var entries = [];

function calculate(event) {
  var btn = event.target.firstChild.data;
  var output = document.getElementById("answer");
  var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (var i = 0; i < number.length; i++) {
    if (i == Number(btn)) {
      current += Number(btn);
    }
  }
  // console.log(btn);
  output.value = current;
  if (btn == "+") {
    entries.push(Number(current));
    total += Number(current);
    current = "";
    // if entries is more than 2 entries display changes as click continue
  }

  if (btn == "=") {
    entries.push(Number(current));
    total += Number(current);
    output.value = total;
    current = "";
  }

  console.log(current);
  console.log(total);
  console.log(entries);
}

// When clicking on button recognise it aa correct datatype.
// set times and divide to do what they're suppsoed to * && /
// push if its a number push to entries.
// then a symbol will decide what to do with it.
// equals will do the calc
// Commas after three numbers enetered
// Fix zero so you can click on the entire button
