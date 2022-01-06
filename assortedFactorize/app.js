  // Courtesy: Mats Hultquist

function factorize ()
{
  // Get the number (or what the user has entered)
  var theNumber = document.getElementById("Number").value;
  // Convert the data to an integer.
  var intNumber = parseInt(theNumber);
  // Get a string to show the result in and make it empty
  var result = "";

  // Check that the user actually entered a integer number and not something else
  if (isNaN(intNumber) || intNumber != theNumber) {
    result =
      "<span style='color:red'>Factorization only works with integers, so please enter another number.</span>";
  } else {
    // iPrime is sort of the prime numbers that the program will factorize the number into.
    // The algorithm is simple one so it will check witch every odd number there is.
    // No need to only check against actually prime numbers.
    var iPrime = 2;
    // Since the number to check against will change and the original number is needed later on copy it to a new string.
    var iCheck = intNumber;

    // Loop until you managed to find all prime numbers in the entered number.
    // iCheck will eventually come down to just 1 when the final prime is found so you can check for that instead.
    while (iCheck >= iPrime) {
      // Check if it is dividable by the prime number we currently checks against.
      if (iCheck % iPrime) {
        // It was not dividable by this prime number so increase to the next prime.
        if (iPrime == 2) {
          // Two is the only even prime number so just add one to get to the next
          // prime number. (You can set iPrime to 3 here if that helps you understand better)
          iPrime++;
        } else {
          // Just add 2 to get to the next odd number (not necessarily the next prime number)
          iPrime += 2;
        }
      } else {
        // It was dividable by the prime number store the prime number in the result and
        // divide the iCheck by iPrime so that this prime is "take away from the number".
        if (result != "") {
          // If there already was some number(s) in the result then add a multiply sign
          // between the old string and the new incoming data.
          result += " * ";
        }
        result += iPrime;
        iCheck /= iPrime;
      }
    }
    // Some beautification on the result string before it is precented.
    if (intNumber == result) {
      result = "The number " + intNumber + " is a prime number.";
    } else {
      result = "The number " + intNumber + " is factorized into " + result;
    }
  }

  // Set the result in assigned space
  document.getElementById("Answer").innerHTML = result;
}
