const todos = [
  {
    text: "Order cat food",
    completed: true,
  },
  {
    text: "Clean kitchen",
    completed: true,
  },
  {
    text: "Buy food",
    completed: false,
  },
  {
    text: "Do work",
    completed: false,
  },
  {
    text: "Exercise",
    completed: true,
  },
]


//1. Setup a div container for todos
//2. Setup filters (searchString) and wire up a new filter 
//3. Create a renderTodos function to render and rerender the latest filtered data.
const todoList = document.querySelector(".todo-list")
const todosInput = document.querySelector(".todos-input")
const searchTodosInput = document.querySelector(".search-input")
const addTodosButton = document.querySelector(".add-todos")


// Add a paragraph for each todo above
todos.forEach((todo) => {
  const li = document.createElement("li")
  li.textContent = todo.text
  todoList.appendChild(li)
})

const addTodo = () => {
  const li = document.createElement("li");
  li.textContent = todosInput.value;
  todoList.appendChild(li);
  todosInput.value = "";
}

const searchTodos = (e) => {
	const searchString = e.target.value
}

//Filters

//Filters incomplete tasks first
const remainingTodos = todos.filter((todo) => !todo.completed);

// //Print String that says "You have X incomplete Todos"
const remainingTodosMessage = `You have ${remainingTodos.length} incomplete todos.`;

const summary = document.createElement("h2");
summary.textContent = remainingTodosMessage;
const container = document.querySelector(".container");

addTodosButton.addEventListener("click", addTodo)
searcTodosInput.addEventListener('input', searchTodos)

