window.addEventListener("click", calculate);

var current = "";
var total = 0;
var entries = [];
var lastClick = "";

function calculate(event) {
  var btn = event.target.firstChild.data;
  var output = document.getElementById("answer");
  var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (var i = 0; i < number.length; i++) {
    if (i == Number(btn)) {
      current += Number(btn);
    }
  }

  // what to do if + button is clicked
  if (btn == "+") {
    // if the last click was = then set current to initial
    if (lastClick == "=" || lastClick == "-") {
      current = "";
    }
    // if the current is not 0 then add it to entries and to total
    if (Number(current != 0)) {
      entries.push(Number(current));
      total += Number(current);
    }
    // set current to inital
    current = "";
  }

  // save to entries as minus?
  if (btn == "-") {
    if (lastClick == "=" || lastClick == "+") {
      current = "";
    }
    if (Number(current != 0)) {
      entries.push(Number(current));
      total += Number(current);
    }
    current = "-";
  }

  // last clicked needs to be after + so it can check if last clicked is = on next click
  lastClick = btn;

  // if current is not empty string, disply the value of current
  // fix display issue of minus showing up once it's all functional
  if (current != "") {
    output.value = current;
  }
  if (btn == "AC") {
    current = "";
    output.value = 0;
    total = 0;
    entries = [];
  }

  //change depending on if trying to minus or plus etc
  if (btn == "=") {
    if (Number(current != 0)) {
      entries.push(Number(current));
    }
    total += Number(current);
    output.value = total;
    // current = ""; //Having this in here allows for correct display but can't spam = sign
  }

  console.log(current);
  console.log(total);
  console.log(entries);
  console.log(lastClick);
}

// When clicking on button recognise it aa correct datatype.
// set times and divide to do what they're suppsoed to * && /
// push if its a number push to entries.
// then a symbol will decide what to do with it.
// equals will do the calc
// Commas after three numbers enetered
// Fix zero so you can click on the entire button
// AC turns to C when input field is not empty
