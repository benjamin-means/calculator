// Things to still toggle with

// Align input box with orange buttons
// Improve AC/C toggle
// round numbers as they get large
// fix zero button
// remove window event listeners and replace with calculator listeners
// Tidy code further "my function does... and.." = failed to tidy
// tidy code by putting groupds into individual funciton e.g. all numbers, all operators etc.

// Event listeners
window.addEventListener("click", updateBtn);
window.addEventListener("click", acToggle);

// Global Variables
var current = "";
var entries = [];
var lastSpec = "";
var btn = "";
var output = document.getElementById("answer");

// Updates button variable
function updateBtn() {
  btn = event.target.firstChild.data;
  if (!isNaN(btn) || btn == ".") {
    current += btn;
    if (current.length > 10) {
      output.value = Number.parseFloat(Number(current)).toPrecision(9);
    } else {
      output.value = current;
    }
  }
  clearEntries();
  equalsBtn();
  lastOperator();
  operators();
  percentageBtn();
  plusOrMinusBtn();
}

// Equals function
function equalsBtn() {
  if (btn == "=") {
    entries.push(current);
    var nt = Number(entries[0]);
    for (var i = 1; i < entries.length; i++) {
      var next = Number(entries[i + 1]);
      var sym = entries[i];

      if (sym == "+") {
        nt += next;
      }
      if (sym == "-") {
        nt -= next;
      }
      if (sym == "*") {
        nt *= next;
      }
      if (sym == "/") {
        nt /= next;
      }
      i++;
    }
    if (nt < 0) {
      nt = "-" + Math.abs(nt);
      current = -Math.abs(nt);
    }
    if (current.length > 10) {
      output.value = Number.parseFloat(Number(nt)).toPrecision(9);
    } else {
      output.value = nt;
    }

    current = nt.toString();
    if (lastSpec != "") {
      entries.splice(0, 1, current);
      if (entries.length > 2) {
        entries.splice(3, entries.length);
      }
    }
  }
}

// Sets the last special character to variable
function lastOperator() {
  var special = ["x", "÷", "+", "-"];
  for (var k = 0; k < special.length; k++) {
    if (btn == special[k]) {
      lastSpec = special[k];
    }
  }
}

// Operators function
function operators() {
  var operator = ["x", "÷", "+", "-"];
  for (var i = 0; i < operator.length; i++)
    if (btn == operator[i]) {
      entries.push(current);
      if (btn == "x") {
        entries.push("*");
      } else if (btn == "÷") {
        entries.push("/");
      } else {
        entries.push(operator[i]);
      }
      current = "";

      if (lastSpec != "") {
        current = "";
        entries.splice(1, entries.length);
        if (btn == "x") {
          entries.push("*");
        } else if (btn == "÷") {
          entries.push("/");
        } else {
          entries.push(lastSpec);
        }
      }
    }
}

// Clears all global variables
function clearEntries() {
  if (btn == "AC" || btn == "C") {
    current = "";
    entries = [];
    lastSpec = "";
    output.value = "";
    btn = "";
  }
}
// Toggles the "AC"/"C" button
function acToggle() {
  var ac = document.getElementById("AC");
  if (current != "" && entries != []) {
    ac.innerHTML = "C";
  }
  if (current == "" && lastSpec == "") {
    ac.innerHTML = "AC";
  }
}

// % button function
function percentageBtn() {
  if (btn == "%") {
    entries.push(current);
    output.value = current / 100;
    current = (current / 100).toString();
    entries.pop();
    if (lastSpec != "") {
      entries = [];
      entries.push(current);
    }
  }
}

// +/- buttons function
function plusOrMinusBtn() {
  if (btn == "+/-") {
    var firstString = current.substring(0, 1);
    if (firstString != "-") {
      current = (-Math.abs(current)).toString();
      output.value = current;
      entries.splice(0, 1, current);
    } else if (firstString == "-") {
      current = Math.abs(current).toString();
      output.value = current;
      entries.splice(0, 1, current);
    }
  }
  // de-bugging checks
  console.log(btn);
  console.log(lastSpec);
  console.log(current);
  console.log(entries);
}
