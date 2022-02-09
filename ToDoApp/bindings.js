function handleAddNewToDo() {
    
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
    }