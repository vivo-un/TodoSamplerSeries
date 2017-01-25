var app;

document.addEventListener("DOMContentLoaded", function(){
  app = {
    init: function(){
      view.displayStoredTodos();
      //add event listener to add new todo button
      console.log(view.addTodoBtn);
      view.addTodoBtn.addEventListener('click', app.handleAddNewTodo);
    },
    handleAddNewTodo: function() {
      alert('I got clicked');
      //get todo
      //add todo to model
      //display new todo in view
    }
  };
});

