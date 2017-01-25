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

var model = new Model();