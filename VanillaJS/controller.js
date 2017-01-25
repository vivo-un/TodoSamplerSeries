//NOTES:
  //any time form submits, need to add an 'e.preventDefault()' or else clears the console
var app;

document.addEventListener("DOMContentLoaded", function(){
  app = {
    init: function(){
      view.displayStoredTodos();
      view.addTodoBtn.addEventListener('click', app.handleAddNewTodo);
      //add listener to every li so that on click it's status becomes done
    },
    handleAddNewTodo: function(e) {
      e.preventDefault();
      var newTodo = document.getElementById('newTodoInput').value;
      model.addTodo(newTodo);
      var allOfTodo = model.getAllOfTodo(newTodo);
      view.displayTodo(allOfTodo);
    },
    handleCompleteTodo: function(e) {
      console.log('e is ', e.srcElement);
      model.completeTodo(e.srcElement.innerText);
      var allOfTodo = model.getAllOfTodo(e.srcElement.innerText);
      view.displayTodo(allOfTodo);
    }
  };
});

