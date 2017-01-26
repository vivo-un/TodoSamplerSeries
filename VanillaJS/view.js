var view;

document.addEventListener("DOMContentLoaded", function() {
  var View = function() {
    this.todos = document.getElementById('todos');
    this.addTodoBtn = document.getElementById('addTodoBtn');
  };

  View.prototype.displayStoredTodos = function() {
    for (var key in model.storage) {
      if (model.storage[key].done) {
        this.displayTodo(model.storage[key], true);
      }
      this.displayTodo(model.storage[key], false);
    }
  };

  View.prototype.displayTodo = function(newTodo, done) {
    var todo = document.createElement('li');
    todo.textContent = newTodo.todo;
    todo.id = newTodo.todo;
    todo.addEventListener('click', function(e){
      app.handleCompleteTodo(e);
    });

    if (done) {
      todo.classList.add('done');
      console.log('this is done');
    }
    todos.appendChild(todo);
  };

  View.prototype.undisplayTodo = function(todo) {
    var child = document.getElementById(todo);
    var parent = todos;
    console.log('child is ', child);
    parent.removeChild(child);
  };

  view = new View();
});