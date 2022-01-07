   /*
   Authors:    Travis Strawn
               Ryan B Cottrell
               Shelby Rutland
               
   Date:       04/11/2020
   
   Filename:   toDoList.js
   */ 

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
} 

function listLength() {
  return item.length;
}

function createListElement() {
  var li = document.createElement("li"); // Creates an element "li"
  li.appendChild(document.createTextNode(input.value)); // Assigns input field to li
  ul.appendChild(li); // Adds li to ul
  input.value = ""; // Reset input field

  //START STRIKETHROUGH
  // Because in function, only adds for new items
  function crossOut() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", crossOut);
  //END STRIKETHROUGH

  // START ADD DELETE BUTTON
  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);
  // END ADD DELETE BUTTON

  //ADD CLASS DELETE (DISPLAY: NONE)
  function deleteListItem() {
    li.classList.add("delete")
  }
  //END ADD CLASS DELETE
}

function addListAfterClick() {
  if (inputLength() > 0) { // Ensures an empty input field doesn't create a li
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) { // Checks for "enter"/"return"
    createListElement();
  } 
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

