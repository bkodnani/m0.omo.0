const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a name');
  
  // para.textContent = name;

  //find the characters in the name
  var number = countNumberofLetters(name);

  // display that number 
  para.textContent = "There were: " + number + "numbers in your input" ;
}

function countNumberofLetters(input) {
  // add input to variable
  var x = input;

  // count number of characters in input
  var numberOfCharacters = x.length;

  // return input
  return numberOfCharacters;

}
