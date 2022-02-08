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
console.log("Starting");
function handleAddNewToDo() {
  console.log("Handling button for Add new Todo");
}

function doBindings() {
  console.log("Bindings");
  var btn = document.getElementById("btnAdd");
  // now we are assigning the operation, not calling the finction here below:
  btn.onclick = handleAddNewToDo;
}

//the below line will not do binding as the document is yet not loaded, so resolve this
// doBindings();
// solution
window.onload = doBindings; // it means execute this function when the html document is fully prepared
console.log('Finished');

// msgs sequence: Starting>Finished>Bindings
// instead of Starting>Bindings>finished
// this is because asyncronyous call

// there is another way to define the onload funtions
// define the anonymos function which is called window.onload and khatam tata bye bye after its work 
window.onload = function() {
  var btn = document.getElementById("btnAdd");
  // now we are assigning the operation, not calling the finction here below:
  btn.onclick = handleAddNewToDo;
}