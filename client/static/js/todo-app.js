const appContainer = document.querySelector("#app");
const todoListContainer = appContainer.querySelector("ul");
const todoInputElement = appContainer.querySelector("input");
const addTodoButton = appContainer.querySelector("button");

// Base todos
const todos = JSON.parse(localStorage.getItem("todos")) || [];

const saveToStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
}

const renderTodos = () => {
    todoListContainer.innerHTML = '';

    for (todo of todos) {
        let listItem = document.createElement("li");
        let itemText = document.createTextNode(todo);

        let linkElement = document.createElement("a");
        linkElement.setAttribute('href', "#");

        let todoPosition = todos.indexOf(todo);
        linkElement.setAttribute("onclick", `deleteTodo(${todoPosition})`);

        let linkText = document.createTextNode("Excluir");

        linkElement.appendChild(linkText);

        listItem.appendChild(itemText);

        todoListContainer.appendChild(listItem);
        listItem.appendChild(linkElement);
        

    }
}

renderTodos();

const addTodo = () => {
    let todoText = todoInputElement.value;

    todos.push(todoText);
    todoInputElement.value = "";
    renderTodos();
    saveToStorage();
}

addTodoButton.onclick = addTodo;


const deleteTodo = position => {
    todos.splice(position, 1);
    renderTodos();
    saveToStorage();
}