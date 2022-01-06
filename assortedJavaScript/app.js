// Thank you => Mats Hultquist 

// Two global variables that i read numbers into.
var numA;
var numB;

// This function will read the values in the two input fields and convert them to floats
// (so you can do things like  3.14 + 8.96) It is OK to just handle integers and have the
// input fields defined as type="number".
// The drawback of number fields is that they can not display placeholder if you want to use it.
function getValues() {
  numA = parseFloat(document.getElementById("NumA").value);
  numB = parseFloat(document.getElementById("NumB").value);

  // isNaN means Is Not a Number so this is a check that the user has enter numbers in the fields.
  // Otherwise it displays an error message.
  if (isNaN(numA) || isNaN(numB)) {
    document.getElementById("Result").innerHTML = "Input Error";
    return false; // Returns false on error
  }
  return true; // returns true if both values was OK.
}

// Add the two numbers together
function addNumbers() {
  // If getValues returned true (both the numbers was correctly read) then do the addition and
  // display the result otherwise don't do anything since ther error messages was displayed in getValues function.
  if (getValues()) {
    document.getElementById("Result").innerHTML = numA + numB;
  }
}

// Subtracts B from A
function subtractNumbers() {
  // Almost the same as in addNumbers.
  if (getValues()) {
    document.getElementById("Result").innerHTML = numA - numB;
  }
}

// Multiply the two numbers
function multiplyNumbers() {
  // Almost the same as in addNumbers.
  if (getValues()) {
    document.getElementById("Result").innerHTML = numA * numB;
  }
}

// Devide A by B
function divideNumbers() {
  // If getValues returned true (both the numbers was correctly read) then do the devision and
  // display the result otherwise don't do anything since ther error messages was displayed in getValues function.
  if (getValues()) {
    // Since division by zero is a bad thing to do, check if the user tryes to do that and display
    // an error message if so.
    if (numB == 0) {
      document.getElementById("Result").innerHTML = "∞ Error";
    } else {
      document.getElementById("Result").innerHTML = numA / numB;
    }
  }
}

// A modula B
function modulaNumbers() {
  // Basicly the same as DivideNumbers sine modula with zero is also bad to do.
  if (getValues()) {
    if (numB == 0) {
      document.getElementById("Result").innerHTML = "∞ Error";
    } else {
      document.getElementById("Result").innerHTML = numA % numB;
    }
  }
}

// A to the power of B
function powerToNumbers() {
  // Almost the same as in addNumbers, but this can give some overflow errors (but the system
  // handels those error messages for you so no code needed for it)
  if (getValues()) {
    document.getElementById("Result").innerHTML = numA ** numB;
  }
}
