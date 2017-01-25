var View = function() {
  this.todos = document.getElementById('todos');
};

View.prototype.displayStoredTodos = function() {
  for (var key in model.storage) {
    var todo = document.createElement('li');
    todo.textContent = key;
    todos.appendChild(todo);
  }
};

var view = new View();