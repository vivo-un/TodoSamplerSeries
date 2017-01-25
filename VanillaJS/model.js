var Model = function() {
  this.storage = {};
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