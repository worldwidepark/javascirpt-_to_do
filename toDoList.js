// document.querySelector("body").style.backgroundColor = color;

// function printName() {
//   let name = document.getElementById("name").value;
//   document.getElementById("result").innerText = name;
// }

function is_checked() {
  let wholeCounts = document.getElementById("wholeCounts");
  let checkedCounts = document.getElementById("checkedCounts");
  let uncheckedCounts = document.getElementById("uncheckedCounts");

  let checkbox = document.getElementsByName("hobby");

  let is_checked = checkbox.checked;

  // chkList.forEach(function (ch) {
  //   console.log(ch.value);
  // });
  let checked = document.querySelectorAll("input[name=hobby]:checked");
  let unchecked = document.querySelectorAll("input[name=hobby]:not(:checked)");

  wholeCounts.innerText = `全てのタスク:${checked.length + unchecked.length}`;
  checkedCounts.innerText = `完了済:${checked.length}`;
  uncheckedCounts.innerText = `未完了:${unchecked.length}`;
}


function myFunction(targetValue) {
  // Create an "li" node:
  const inputValue = document.getElementById(targetValue).value;
  const node = document.getElementById("checkbox");
  const checkForm = document.createElement("form");
  
  // Create a text node:
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "hobby";
  checkbox.value = "done";

  checkbox.setAttribute("onclick", "is_checked()");
  // checkbox.id=

  const label = document.createElement("label");
  label.appendChild(document.createTextNode(inputValue));
  // Append the text node to the "li" node:

  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  editButton.type = 'button';
  editButton.innerText = 'edit';
  editButton.setAttribute("onclick", "edit(event)");
  
  deleteButton.type = 'button';
  deleteButton.innerText = 'delete';
  deleteButton.setAttribute("onclick","deleteForm(event)");
  
  checkForm.appendChild(checkbox);
  checkForm.appendChild(label);
  checkForm.appendChild(editButton);
  checkForm.appendChild(deleteButton);
  
  node.appendChild(checkForm);
  is_checked();
  // Append the "li" node to the list:
  // document.getElementById("myList").appendChild(node);
}

function edit(event){
  const parent = event.target.parentElement;
  while (parent.hasChildNodes()){
    parent.removeChild(parent.firstChild);
  }
  const input = document.createElement("input");
  input.type = "text" 
  input.id = "edit"
  const editButton = document.createElement("button");
  editButton.type = 'button';
  editButton.innerText = 'edit';
  editButton.setAttribute("onclick", "myFunction2(event)");

  parent.appendChild(input);
  parent.appendChild(editButton); 

}
function myFunction2(event) {
  const parent = event.target.parentElement;
  const inputValue = document.getElementById("edit").value;
  while (parent.hasChildNodes()){
    parent.removeChild(parent.firstChild);
  }
  
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "hobby";
  checkbox.value = "done";
  checkbox.setAttribute("onclick", "is_checked()");


  const label = document.createElement("label");
  label.appendChild(document.createTextNode(inputValue));

  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  editButton.type = 'button';
  editButton.innerText = 'edit';
  editButton.setAttribute("onclick", "edit(event)");
  
  deleteButton.type = 'button';
  deleteButton.innerText = 'delete';
  deleteButton.setAttribute("onclick", "deleteForm(event)");
  
  parent.appendChild(checkbox);
  parent.appendChild(label);
  parent.appendChild(editButton);
  parent.appendChild(deleteButton);
  
  is_checked();
  }

  function deleteForm(event){
    let flag = confirm("Are you sure to delete this list");
    if(flag == true){
      const parent = event.target.parentElement;
      parent.remove();
      is_checked();
    }else{
      return;
    }
  }

