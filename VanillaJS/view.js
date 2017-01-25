var view;

document.addEventListener("DOMContentLoaded", function() {
  var View = function() {
    this.todos = document.getElementById('todos');
    this.addTodoBtn = document.getElementById('addTodoBtn');
    this.newTodoInput = document.getElementById('newTodoInput');
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