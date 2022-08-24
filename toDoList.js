const isChecked = () => {
  const wholeCounts = document.getElementById("wholeCounts");
  const checkedCounts = document.getElementById("checkedCounts");
  const uncheckedCounts = document.getElementById("uncheckedCounts");

  const checked = document.querySelectorAll("input[name=todolist]:checked");
  const unchecked = document.querySelectorAll(
    "input[name=todolist]:not(:checked)"
  );

  wholeCounts.innerText = String(checked.length + unchecked.length);
  checkedCounts.innerText = String(checked.length);
  uncheckedCounts.innerText = String(unchecked.length);
};

const createToDoList = (inputValue, checkForm, checked) => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "todolist";
  checkbox.value = "done";
  checkbox.setAttribute("onclick", "isChecked()");
  checkbox.checked = checked;

  const label = document.createElement("label");
  label.appendChild(document.createTextNode(inputValue));

  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
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
};

const makeToDoList = () => {
  const inputValue = document.getElementById("inputToDo").value;
  if (inputValue.length === 0) {
    alert("Please Put something.");
  } else {
    const node = document.getElementById("checkbox");
    if (node.children[0].innerText === "Nothing to do. Put something.") {
      node.children[0].innerText = "";
    }
    const checkForm = document.createElement("form");
    checkForm.id = "checkForm";
    createToDoList(inputValue, checkForm);
    node.appendChild(checkForm);
    isChecked();
    document.getElementById("inputToDoForm").reset();
  }
};

const makeEditInput = (event) => {
  const parent = event.target.parentElement;
  const editValue = parent.childNodes[1].textContent;
  //checkboxがチェックされているかを確認
  const checked = parent.childNodes[0].checked;
  const input = document.createElement("input");
  input.type = "text";
  input.id = "edit";
  input.value = editValue;

  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.innerText = "edit";
  editButton.id = "editButton";
  //checkboxのチェックの結果を引数として渡す。
  editButton.setAttribute(
    "onclick",
    `inputEditedToDoList(event, checked = ${checked} )`
  );

  parent.appendChild(input);
  parent.appendChild(editButton);
};
const inputEditedToDoList = (event, checked) => {
  const inputValue = document.getElementById("edit").value;
  if (inputValue.length == 0) {
    alert("Please Put something.");
  } else {
    const parent = event.target.parentElement;

    while (parent.hasChildNodes()) {
      parent.removeChild(parent.firstChild);
    }
    //チェック結果の引数を渡す。
    createToDoList(inputValue, parent, checked);
  }
};
const deleteToDoList = (event) => {
  const flag = confirm("Are you sure to delete this list?");
  if (flag) {
    const parent = event.target.parentElement;
    const checkbox = parent.parentElement;
    parent.remove();
    isChecked();
    if (checkbox.childElementCount === 1) {
      checkbox.children[0].innerText = "Nothing to do. Put something.";
    }
  } else {
    return;
  }
};

const inputBtn = document.getElementById("inputButton");
inputBtn.addEventListener("click", makeToDoList);
