//NOTES:
  //any time form submits, need to add an 'e.preventDefault()' or else clears the console

var app;

document.addEventListener("DOMContentLoaded", function(){
  app = {
    init: function(){
      view.displayStoredTodos();
      view.addTodoBtn.addEventListener('click', app.handleAddNewTodo);
    },
    handleAddNewTodo: function(e) {
      e.preventDefault();
      var newTodo = document.getElementById('newTodoInput').value;
      model.addTodo(newTodo);
      view.displayTodo(newTodo);
    }
  };
});

