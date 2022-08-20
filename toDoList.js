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

function myFunction() {
  // Create an "li" node:
  const name = document.getElementById("name").value;
  const node = document.getElementById("checkbox");

  // Create a text node:
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "hobby";
  checkbox.value = "done";

  checkbox.setAttribute("onclick", "is_checked()");
  // checkbox.id=

  const label = document.createElement("label");
  label.appendChild(document.createTextNode(name));
  // Append the text node to the "li" node:

  node.appendChild(checkbox);
  node.appendChild(label);
  // Append the "li" node to the list:
  // document.getElementById("myList").appendChild(node);
}
