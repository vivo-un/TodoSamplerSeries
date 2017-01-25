// var model = require('./model.js');
var app;

app = {
  init: function(){
    app.displayStoredTodos();
  },
  displayStoredTodos: function(){
    for (var key in model.storage) {
      var todos = document.getElementById('todos');
      var todo = document.createElement('li');
      todo.textContent = key;
      todos.appendChild(todo);
    }
  }
};

