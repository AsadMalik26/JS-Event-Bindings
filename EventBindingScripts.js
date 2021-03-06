// note the JS load loads first (while loading the page) when the html document is being prepared

function btnClicked() {
  console.log("My button is clicked");
}

function update() {
  console.log("Updating result");
  // it will pick the input form by their id and store into the variable input
  var input = document.getElementById("myinput");
  // it will print the value on console
  console.log(input.value); // done for input field

  // it will pick the span form by their id and store into the variable output
  var output = document.getElementById("output");
  // now we are overwritting the span msg/text/innerHTML by the value of input
  output.innerHTML = "Result: " + input.value;
}

// efforts for Clean code
function handleAddNewToDo() {
  console.log("Handling button for Add new Todo");
}

function doBindings() {
  var btn = document.getElementById("btnAdd");
  // now we are assigning the operation, not calling the finction here below:
  btn.onclick = handleAddNewToDo;
}
window.onload = function() {
    // do all bindings here
    var btn = document.getElementById("btnAdd");
    // now we are assigning the operation, not calling the finction here below:
    btn.onclick = handleAddNewToDo;
    /*  you can write a full anonymous function here (where are you calling the functions for assigning) instead of writing seperate functions and then calling them
     e.g
     btn.click = funtion() {
         statements here...
     } */
  }

  /* Next we will learn add/remove tags, handle the events on tags etc
  then will move to JSQuery */