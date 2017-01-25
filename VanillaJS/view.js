var view;

document.addEventListener("DOMContentLoaded", function() {
  var View = function() {
    this.todos = document.getElementById('todos');
    this.addTodoBtn = document.getElementById('addTodoBtn');
    console.log('addTodoBtn from view ', document.getElementById('addTodoBtn'));
  };

  View.prototype.displayStoredTodos = function() {
    for (var key in model.storage) {
      var todo = document.createElement('li');
      todo.textContent = key;
      todos.appendChild(todo);
    }
  };

  View.prototype.displayNewTodo = function() {};

  view = new View();
});