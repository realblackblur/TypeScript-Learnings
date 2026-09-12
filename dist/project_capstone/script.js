//Project: To-Do App
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
function isValidTodo(item) {
    if (typeof item !== "object" || item === null) {
        return false;
    }
    if (!("id" in item) || typeof item.id !== "number") {
        return false;
    }
    if (!("text" in item) || typeof item.text !== "string") {
        return false;
    }
    if (!("completed" in item) || typeof item.completed !== "boolean") {
        return false;
    }
    return true;
}
function loadTodos() {
    const raw = localStorage.getItem("todos");
    if (raw === null) {
        return [];
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
        return [];
    }
    return parsed.filter(isValidTodo);
}
class TodoApp {
    todos;
    constructor(todos) {
        this.todos = todos;
        this.renderTodos();
    }
    addTodo(text) {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
        };
        this.todos.push(newTodo);
        this.saveTodos();
        this.renderTodos();
    }
    toggleTodo(id) {
        this.todos = this.todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        });
        this.saveTodos();
        this.renderTodos();
    }
    editTodo(id, changes) {
        this.todos = this.todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    ...changes,
                };
            }
            else {
                return todo;
            }
        });
        this.saveTodos();
        this.renderTodos();
    }
    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => {
            return id !== todo.id;
        });
        this.saveTodos();
        this.renderTodos();
    }
    saveTodos() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }
    renderTodos() {
        if (!todoList) {
            return;
        }
        todoList.innerHTML = "";
        for (const todo of this.todos) {
            const li = document.createElement("li");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = todo.completed;
            const span = document.createElement("span");
            span.textContent = todo.text;
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
            checkbox.addEventListener("change", () => {
                app.toggleTodo(todo.id);
            });
            deleteBtn.addEventListener("click", () => {
                app.deleteTodo(todo.id);
            });
        }
    }
}
const app = new TodoApp(loadTodos());
todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = todoInput.value.trim();
    if (text === "") {
        return;
    }
    app.addTodo(text);
    todoInput.value = "";
});
export {};
//# sourceMappingURL=script.js.map