var app;

app = {
  init: function(){
    app.todos.forEach(function(each) {
      var todos = document.getElementById('todos');
      var todo = document.createElement('li');
      todo.textContent = each;
      todos.appendChild(todo);
    });
  },
  todos: ['eat healthy', 'exercise', 'build career']
};

