const todolist = [];

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todolist.push(name);
  inputElement.value = '';
  renderTodolist();
}

function renderTodolist() {
  let todolistHTML = '';
  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];
    const html = `<p>${todo}
        <button onclick="
        todolist.splice(${i}, 1);
        renderTodolist();
        ">Delete</button>
        </p>`;
    todolistHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}

const todolist1 = [];

function addTodo1() {
  const inputElement1 = document.querySelector('.js-name-input-1');
  const name1 = inputElement1.value;
  const inputvaluedate = document.querySelector('.js-date-input');
  const duedate = inputvaluedate.value;
  todolist1.push({
    name: name1,
    duedate: duedate
  });
  inputElement1.value = '';
  inputvaluedate.value = '';
  renderTodolist1();
}

function renderTodolist1() {
  let todolisthtml1 = '';
  for (let j = 0; j < todolist1.length; j++) {
    const todo1object = todolist1[j];
    const name1 = todo1object.name;
    const duedate = todo1object.duedate;
    const html2 = `<span>${name1}</span>
        <span>${duedate}</span> 
        <button onclick="
        todolist1.splice(${j}, 1);
        renderTodolist1();">Delete</button>`;
    todolisthtml1 += html2;
  }
  document.querySelector('.js-todo-list1').innerHTML = todolisthtml1;
}
