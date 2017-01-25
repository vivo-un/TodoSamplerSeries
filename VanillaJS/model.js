var Model = function() {
  this.storage = {
    'eat healthy': {
      todo: 'eat healthy',
      done: false
    }
  };
};

Todo = function(newTodo) {
  return {
    todo: newTodo,
    done: false
  };
};

Model.prototype.addTodo = function(newTodo) {
  this.storage[newTodo] = new Todo(newTodo);
};

Model.prototype.completeTodo = function(todo) {
  this.storage[todo].done = true;
};

Model.prototype.getAllOfTodo = function(todo) {
  return this.storage[todo];
};

var model = new Model();