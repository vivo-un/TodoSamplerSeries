var view;

document.addEventListener("DOMContentLoaded", function() {
  var View = function() {
    this.todos = document.getElementById('todos');
    this.addTodoBtn = document.getElementById('addTodoBtn');
  };

  View.prototype.displayStoredTodos = function() {
    for (var key in model.storage) {
      var todo = document.createElement('li');
      todo.textContent = key;
      todos.appendChild(todo);
    }
  };

  View.prototype.displayNewTodo = function(newTodo) {
    var todo = document.createElement('li');
    todo.textContent = newTodo;
    todos.appendChild(todo);
  };

  view = new View();
});