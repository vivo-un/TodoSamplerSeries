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
  console.log('model storage is ', this.storage);
};

var model = new Model();