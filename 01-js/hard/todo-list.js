/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.list = [];
  }
  add(todo) {
    this.list.push(todo);
  }
  remove(index) {
    if (index >= 0 && index < this.list.length) {
      return this.list.splice(index, 1);
    } else {
      return false;
    }
  }
  update(index, updatedTodo) {
    if (index >= 0 && index < this.list.length) {
      this.list[index] = updatedTodo;
    } else {
      return false;
    }
  }
  getAll() {
    return this.list;
  }
  get(index) {
    return index >= 0 && index < this.list.length ? this.list[index] : null;
  }
  clear() {
    this.list = [];
  }
}

module.exports = Todo;
