// Medium: 

// Overview: In this lab, you will build a TODO list application using JavaScript classes and the DOM. The app will allow users to add and delete items from their TODO list.

// Objectives:

// Create a TODO list with a text input and button to submit new items
// Allow users to add and delete items from the list
// Use JavaScript classes to manage the TODO list items
// Steps:

// Create an HTML file with a text input and button to add new TODO items. Also, add an empty unordered list to the page to hold the TODO items.
// Create a JavaScript file and link it to the HTML file.
// Create a class called "TodoList" with an array property to hold the list items and methods to add and delete items from the list.
// Create a new instance of the TodoList class and store it in a variable.
// Add an event listener to the form submit button that calls the add() method on the TodoList instance with the value of the text input.
// Implement the add() method on the TodoList class to add a new item to the list.
// Implement the delete() method on the TodoList class to remove an item from the list.
// Add an event listener to each item in the list that calls the delete() method on the TodoList instance with the clicked item.
// Test the application by adding and deleting items from the TODO list.

class TodoList {
    constructor(){
        this.items = []
    }
    add(item) {
        this.items.push(item);
    }
    delete(index) {
        this.items.splice(index, 1);
    }
}

let todoList = new TodoList();

let form = document.querySelector('#todo-form');
let input = document.querySelector('#todo-input');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let todoText = input.value.trim();

    if (todoText !=='') {
        todoList.add(todoText);
        input.value= '';
        renderTodoList();
    }
});

function renderTodoList() {
    let todoListElement = document.querySelector('#todo-list');
    todoListElement.innerHTML = '';
  
    todoList.items.forEach((item, index) => {
      let li = document.createElement('li');
      li.textContent = item;
  
      let deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        todoList.delete(index);
        renderTodoList();
      });
  
      li.appendChild(deleteButton);
      todoListElement.appendChild(li);
    });
  }
  