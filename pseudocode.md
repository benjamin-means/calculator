# Reverse PseudoCode

## HTML

<!-- Start of div for calculator.

text to give it a name.
additional text for effect.

Input field that will be a table of buttons.
//series of rows for the buttons.
top row: AC, CE, %, ÷.
second row: 7, 8, 9, X.
third row: 4, 5, 6, -.
fourth row: 1, 2, 3, +.
last row: 0, ., =.

End of div for calculator-->

## CSS

<!-- Import fonts link.

Add colour variables.

Sest body/html width and color.

Calculator:
width and height,
background colour,
margins,
set corners to rounded,
add shadows for key effects,
align the text.

Text at the top of calc:
set paddings and margins,
set colors,
set font,
transform text.

Input box/numbers/buttons:
background color,
set borders,
line height,
width,
font-size & family,
direction?
padding and margins,
shadows.

Rows:
set display setting,
Buttons:
width and height,
borders,
colors and font size,
rounding of edges,
margins and box shadows,
set focus and active state?.

Ctrl (display):
set borders and border shadows

Tall (+ button):
height
and margins
+ float.

 -->

## JavaScript

<!--
Initialize variables:
Entires as an empty array,
Total as 0.
another one as an empty string.

Add an event listener for a button click that runs a function.

The function:
intitalizes variable 'value' that will output buttons clicked to screen.

if it's a number or '.';
add it to value,
display it.

else if its a symbol that's not equals;
re set entires,temp, and total,
don't dislay, just run.

else if it's the clear button;
set temp to original,
don't display, just run.

else if it's the x button;
add temp to end of entires,
change x to * to work,
set temp to initial.

else if it's ÷;
add tempt to end of entires,
change ÷ to / to work,
set temp to inital.

else if it's =;
add temp to end of etnries,
set new  nt variable = number of entries at index 0,
for loop for lenght of entries,
new variable nextnumber that is nt index[i],
new variable symbol that is entries[i],

if symbol is +; add nextnumber to nt,
else if it's -, minus it,
else if it's *, times it,
else if it's /, divide it,

increment i,

if nt is less than 0;
set it to the absoulte value.

output answer of nt;
set entires to empty array again,
set temp to inital.

else;
add temp to entries,
and value to entires,
set temp to inital.

DONE.



-->
