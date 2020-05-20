// Don't forget to fix the zero button

// Event listeners
window.addEventListener("click", updateBtn);
window.addEventListener("click", specialBtn);
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
  if (btn == "AC" || btn == "C") {
    clearEntries();
  }
  if (!isNaN(btn) || btn == ".") {
    current += btn;
    output.value = current;
  }
  if (btn == "=") {
    equalsBtn();
  }
  lastOperator();
  operators();
  // console.log(current);
  // console.log(entries);
}

// Equals function
function equalsBtn() {
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
  output.value = nt;
  current = nt.toString();
  if (lastSpec != "") {
    entries.shift();
    entries.unshift(current);
    if (entries.length > 2) {
      entries.splice(3, entries.length);
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

// operators function
function operators() {
  if (btn == "-") {
    entries.push(current);
    entries.push("-");
    current = "";
    if (lastSpec != "") {
      current = "";
      entries.splice(1, entries.length);
      entries.push(lastSpec);
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
  }
}

// Clears all entries
function clearEntries() {
  current = "";
  entries = [];
  lastSpec = "";
  output.value = "";
  btn = "";
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

// Special buttons function
function specialBtn() {
  if (btn == "%") {
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
      entries.shift();
      entries.unshift(current);
    } else if (thing == "-") {
      current = Math.abs(current).toString();
      output.value = current;
      entries.shift();
      entries.unshift(current);
    }
  }

  console.log(current);
  console.log(entries);
}
