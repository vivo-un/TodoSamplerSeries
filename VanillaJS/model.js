var Model = function() {
  this.storage = {
    'eat healthy': {
      todo: 'eat healthy',
      done: false
    }
  };
};

Model.prototype.Todo = function(newTodo) {
  return {
    todo: newTodo,
    done: false
  };
};

Model.prototype.addTodo = function(newTodo) {
  Model.storage[newTodo] = new Todo(newTodo);
};

var model = new Model();