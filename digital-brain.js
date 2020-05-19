//  Tinker and refactor
// Don't forget to fix the zero button

window.addEventListener("click", calculate);
window.addEventListener("click", acToggle);

var current = "";
var entries = [];
// TINKER
var lastSpec = "";

function acToggle() {
  var ac = document.getElementById("AC");
  if (current != "" && entries != []) {
    ac.innerHTML = "C";
  }
  if (current == "" && lastSpec == "") {
    ac.innerHTML = "AC";
  }
}

function calculate(event) {
  var btn = event.target.firstChild.data;
  var output = document.getElementById("answer");
  var AC = document.getElementById("AC");
  //use something other than a for loop?
  // TINKER
  var special = ["x", "÷", "+", "-"];
  for (var k = 0; k < special.length; k++) {
    if (btn == special[k]) {
      lastSpec = special[k];
    }
  }

  if (!isNaN(btn) || btn == ".") {
    current += btn;
    output.value = current;
  } else if (btn == "AC" || btn == "C") {
    current = "";
    entries = [];
    lastSpec = "";
    output.value = "";
  } else if (btn == "-") {
    // TINKER
    entries.push(current);
    entries.push("-");
    current = "";
    if (lastSpec != "") {
      current = "";
      entries.splice(1, entries.length);
      entries.push(lastSpec);
    }
  }
  // divide by 100 and return output
  // TINKER
  else if (btn == "%") {
    entries.push(current);
    output.value = current / 100;
    current = (current / 100).toString();
    entries.pop();
    if (lastSpec != "") {
      entries = [];
      entries.push(current);
    }
  } else if (btn == "+/-") {
    var thing = current.substring(0, 1);
    if (thing != "-") {
      current = (-Math.abs(current)).toString();
      output.value = current;
    } else if (thing == "-") {
      current = Math.abs(current).toString();
      output.value = current;
    }
  } else if (btn == "+") {
    entries.push(current);
    entries.push("+");
    current = "";
    if (lastSpec != "") {
      current = "";
      entries.splice(1, entries.length);
      entries.push(lastSpec);
    }
  } else if (btn == "x") {
    entries.push(current);
    entries.push("*");
    current = "";
    if (lastSpec != "") {
      current = "";
      entries.splice(1, entries.length);
      entries.push("*");
    }
  } else if (btn == "÷") {
    entries.push(current);
    entries.push("/");
    current = "";
    if (lastSpec != "") {
      current = "";
      entries.splice(1, entries.length);
      entries.push("/");
    }
  } else if (btn == "=") {
    entries.push(current);
    // use something other than for loop?
    // what if the first click isnt a number?
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
    output.value = nt;
    // entries = [];
    current = nt.toString();
    // figure out how to make it so you can spam = and swap between + && - etc
    // BIG TINKER
    if (lastSpec != "") {
      entries.shift();
      entries.unshift(current);
      if (entries.length > 2) {
        entries.splice(3, entries.length);
      }
    }
  } else {
    entries.push(current);
    entries.push(output.value);
    current = "";
  }

  console.log(current);
  console.log(entries);
}

// function calculate(event) {
//   var btn = event.target.firstChild.data;
//   var output = document.getElementById("answer");
// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// for (var i = 0; i < number.length; i++) {
//   if (i == Number(btn)) {
//     current += Number(btn);
//   }
// }

// what to do if + button is clicked
// if (btn == "+") {
//   // if the last click was = then set current to initial
//   if (lastClick == "=" || lastClick == "-") {
//     current = "";
//   }
//   // if the current is not 0 then add it to entries and to total
//   if (Number(current != 0)) {
//     entries.push(Number(current));
//     total += Number(current);
//   }
//   // set current to inital
//   current = "";
// }

// what to do if - button is clicked
// if (btn == "-") {
//   if (lastClick == "=" || lastClick == "+") {
//     current = "";
//   }
//   if (Number(current != 0)) {
//     entries.push(Number(current));
//     total += Number(current);
//   }
//   current = "-";
// }

// what to do if x button is clicked
// might have to re-think this
// if (btn == "x") {
//   if (lastClick == "=" || lastClick == "+" || lastClick == "-") {
//     current = "";
//   }
//   if (Number(current != 0)) {
//     entries.push(Number(current));
//     entries.push("*");
//     total *= Number(current);
//   }
//   current = "";
// }

// if (lastClick == "x") {
//   Number(current) *= entries[0];
//   entries.push(total);
//   entries.pop();
// }

// last clicked needs to be after + so it can check if last clicked is = on next click
// lastClick = btn;

// // if current is not empty string, disply the value of current
// // fix display issue of minus showing up once it's all functional
// if (current != "") {
//   output.value = current;
// }
// if (btn == "AC") {
//   current = "";
//   output.value = 0;
//   total = 0;
//   entries = [];
// }

//change depending on if trying to minus or plus etc
//   if (btn == "=") {
//     if (Number(current != 0)) {
//       entries.push(Number(current));
//     }
//     total += Number(current);
//     output.value = total;
//     // current = ""; //Having this in here allows for correct display but can't spam = sign
//   }

//   console.log(current);
//   console.log(total);
//   console.log(entries);
//   console.log(lastClick);
// }

// When clicking on button recognise it aa correct datatype.
// set times and divide to do what they're suppsoed to * && /
// push if its a number push to entries.
// then a symbol will decide what to do with it.
// equals will do the calc
// Commas after three numbers enetered
// Fix zero so you can click on the entire button
// AC turns to C when input field is not empty
