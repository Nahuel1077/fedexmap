const newTask = document.getElementById("newTask");
const deleteTask = document.getElementById("delete");
const editTask = document.getElementById("edit");
const taskContainer = document.getElementById("taskContainer");

newTask.addEventListener("click", New);
editTask.addEventListener("click", Edit);
deleteTask.addEventListener("click", Delete);

function New(){
    var taskTitle = prompt("Describe task");
    var task = document.createElement("div");
    var content = document.createElement("h1");
    var taskContent = document.createTextNode(taskTitle);

    if (taskTitle == "") {
        alert("Invalid task name and/or description, try again");
        return false;
    } else{
        taskContainer.appendChild(task);
        task.setAttribute("id", taskTitle);
        task.setAttribute("class", "card");
        task.appendChild(content);
        content.appendChild(taskContent);
    };
}

function Edit(){
    alert("Click on the element you want to edit");
    taskContainer.addEventListener("click", function(event){
        let targetElement = event.target;
        if (targetElement.tagName === 'H1') {
            let originalText = targetElement.textContent;
            let inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = originalText;
            targetElement.replaceWith(inputField);
            inputField.focus();
            inputField.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    let newElement = document.createElement(targetElement.tagName.toLowerCase());
                    newElement.textContent = inputField.value;
                    inputField.replaceWith(newElement);
                };
            });
            inputField.addEventListener('blur', function() {
                let newElement = document.createElement(targetElement.tagName.toLowerCase());
                newElement.textContent = inputField.value;
                inputField.replaceWith(newElement);
            });
        };
    });
}

function Delete() {
    alert("Click on the element you want to delete");
    taskContainer.addEventListener("click", function(event) {
        let targetElement = event.target;
        if (targetElement.tagName === 'H1') {
            targetElement.parentElement.removeChild(targetElement);
        }
    });
}

