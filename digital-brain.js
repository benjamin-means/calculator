window.addEventListener("click", calculate);

var total = 0;
var entries = [];

function calculate(event) {
  var btn = event.target.firstChild.data;
  var output = document.getElementById("answer");
  console.log(btn);
  // console.log(typeof btn); they're all strings at this stage
  entries.push(output.value);
  console.log(entries);
  output.value = btn;
}

// When clicking on button recognise it aa correct datatype.
// set times and divide to do what they're suppsoed to * && /
// push if its a number push to entries.
// then a symbol will decide what to do with it.
// equals will do the calc
