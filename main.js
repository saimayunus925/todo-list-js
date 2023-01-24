
// objective: create a functioning CRUD to-do list app with just HTML and JavaScript (and later CSS, perhaps)

var todoListJS = document.getElementById("todoList"); // getting our list from the HTML file using its ID

var addItemForm = document.getElementById("addItem"); // form for adding items to to-do list

addItemForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // here, we add the user-submitted todo list item to our todo list
    var itemText = document.querySelector("#itemText").value; // todo item text (we need 'value' property to get actual text)
    var newTextNode = document.createTextNode(itemText); // so far, we only have user-submitted text, and that's ok, we can make a text node with that item text
    var todoItem = document.createElement('li'); // create new todo list item to add our text to
    todoItem.textContent = itemText; // make item text the 'text content' of the todo list item
    todoListJS.appendChild(todoItem); // add new todo item to todo list
});
