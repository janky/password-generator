// Assignment code here

//generate password
function generatePassword()
{
  let criteria = "";
  let passWord = "";

  //prompt user for password criteria
  //password length
  var pLen = window.prompt("Please indicate length of password (8-128)");
  window.alert("You entered: " + pLen);
  parseInt(pLen);

  //lowercase prompt
  var lowerCase = window.confirm("Would you like to include lower case?");
  if (lowerCase)
  {
    window.alert("You entered: Yes");
    criteria = "abcdefghijklmnopqrstuvwxyz";
  }
  else
  {
    window.alert("You entered: No");

  }

  //upper case prompt
  var upperCase = window.confirm("Would you like to include upper case?");
  if (upperCase)
  {
    window.alert("You entered: Yes");
    criteria += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else
  {
    window.alert("You entered: No");
  }

  //number prompt
  var numeric = window.confirm("Would you like to include numbers?");
  if (numeric)
  {
    window.alert("You entered: Yes");
    criteria += "0123456789";
  }
  else
  {
    window.alert("You entered: No");
  }

  //special characters prompt
  var special = window.confirm("Would you like to include special characters?");
  if (special)
  {
    window.alert("You entered: Yes");
    criteria += "!@#$%^&*()_+";
  }
  else
  {
    window.alert("You entered: No");
  }
  console.log(criteria);

  //iterate over criteria variable
  for(let i = 0; i < pLen; i++)
  {
    passWord = passWord + criteria.charAt(Math.floor(Math.random() * criteria.length - 1))
  }
  
  return passWord;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
