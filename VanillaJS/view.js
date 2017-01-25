var View = function() {};

View.prototype.displayStoredTodos = function() {
  for (var key in model.storage) {
    var todos = document.getElementById('todos');
    var todo = document.createElement('li');
    todo.textContent = key;
    todos.appendChild(todo);
  }
};

var view = new View();