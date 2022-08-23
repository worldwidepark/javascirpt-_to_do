function is_checked() {
  let wholeCounts = document.getElementById("wholeCounts");
  let checkedCounts = document.getElementById("checkedCounts");
  let uncheckedCounts = document.getElementById("uncheckedCounts");

  let checked = document.querySelectorAll("input[name=todolist]:checked");
  let unchecked = document.querySelectorAll(
    "input[name=todolist]:not(:checked)"
  );

  wholeCounts.innerText = `全てのタスク:${checked.length + unchecked.length}`;
  checkedCounts.innerText = `完了済:${checked.length}`;
  uncheckedCounts.innerText = `未完了:${unchecked.length}`;
}

function createToDoList(inputValue, checkForm) {
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "todolist";
  checkbox.value = "done";
  checkbox.setAttribute("onclick", "is_checked()");

  let label = document.createElement("label");
  label.appendChild(document.createTextNode(inputValue));

  let editButton = document.createElement("button");
  let deleteButton = document.createElement("button");
  editButton.type = "button";
  editButton.innerText = "edit";
  editButton.setAttribute("onclick", "makeEditInput(event)");
  editButton.id = "editButton";

  deleteButton.type = "button";
  deleteButton.innerText = "delete";
  deleteButton.setAttribute("onclick", "deleteToDoList(event)");
  deleteButton.id = "deleteButton";

  checkForm.appendChild(checkbox);
  checkForm.appendChild(label);
  checkForm.appendChild(editButton);
  checkForm.appendChild(deleteButton);
}

function makeToDoList(targetValue) {
  const inputValue = document.getElementById(targetValue).value;
  if (inputValue.length == 0) {
    alert("Please Put something.");
  } else {
    const node = document.getElementById("checkbox");
    if (node.children[0].innerText == "Nothing to do. Put something.") {
      node.children[0].innerText = "";
    }
    const checkForm = document.createElement("form");
    checkForm.id = "checkForm";
    createToDoList(inputValue, checkForm);
    node.appendChild(checkForm);
    is_checked();
    document.getElementById("inputToDoForm").reset();
  }
}

function makeEditInput(event) {
  let parent = event.target.parentElement;
  let editValue = parent.childNodes[1].textContent;
  console.log(editValue);
  let input = document.createElement("input");
  input.type = "text";
  input.id = "edit";
  input.value = editValue;

  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
  let editButton = document.createElement("button");
  editButton.type = "button";
  editButton.innerText = "edit";
  editButton.id = "editButton";
  editButton.setAttribute("onclick", "inputEditedToDoList(event)");

  parent.appendChild(input);
  parent.appendChild(editButton);
}
function inputEditedToDoList(event) {
  const inputValue = document.getElementById("edit").value;
  if (inputValue.length == 0) {
    alert("Please Put something.");
  } else {
    const parent = event.target.parentElement;

    while (parent.hasChildNodes()) {
      parent.removeChild(parent.firstChild);
    }
    createToDoList(inputValue, parent);
    is_checked();
  }
}
function deleteToDoList(event) {
  let flag = confirm("Are you sure to delete this list?");
  if (flag == true) {
    let parent = event.target.parentElement;
    let checkbox = parent.parentElement;
    parent.remove();
    is_checked();
    console.log(checkbox);
    if (checkbox.childElementCount == 1) {
      checkbox.children[0].innerText = "Nothing to do. Put something.";
    }
  } else {
    return;
  }
}
