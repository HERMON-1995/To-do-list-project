import ListTemplate from './Class.js';
import localGet from './Store.js';

const todoContent = document.getElementById('listItem');
const todoTask = document.getElementById('input');
const displayList = () => {
  todoContent.replaceChildren();
  localGet().forEach((item, id) => {
    let isCompleted;
    if (item.completed === true) {
      isCompleted = 'checked';
    } else {
      isCompleted = '';
    }

    todoContent.innerHTML += `
      <div class="toDoItem">
        <div class="added-checkbox">

        <input class='item' id='check-${id}', "completed")' type='checkbox' ${item.Checked ? 'true' : 'false'} onChange='updateList(${id}, "completed")' ${isCompleted}>
        <input onkeyup='updateList(${id})' type="text" class='findInput' id='input-${id}' value='${item.description}' />

        </div>
        <i class="delete" onclick='removeList(${item.index})' id='delete-${item.index}'>🗑️</i>
      </div>
        `;
  });
};

const addList = (description, completed, index) => {
  const listAdded = new ListTemplate(description, completed, index);
  const x = localGet();
  x.push(listAdded);
  localStorage.setItem('listStorage', JSON.stringify(x));
  todoTask.value = '';

  displayList();
};

const reAssignIndex = (filteredArray) => {
  filteredArray.forEach((item, i) => {
    item.index = i + 1;
  });
};

window.removeList = (id) => {
  const filteredArray = localGet().filter((item) => {
    if (item.index !== id) {
      return item;
    }
    return '';
  });
  reAssignIndex(filteredArray);
  localStorage.setItem('listStorage', JSON.stringify(filteredArray));

  displayList();
};

window.updateList = (id) => {
  const updateInput = document.querySelector(`#input-${id}`).value;
  const updateArray = localGet().map((item) => {
    if (item.index - 1 === id) {
      item.description = updateInput;

      if (item.completed === true) {
        item.completed = false;
      } else {
        item.completed = true;
      }
    }

    return item;
  });

  localStorage.setItem('listStorage', JSON.stringify(updateArray));
};

export { addList, displayList };
