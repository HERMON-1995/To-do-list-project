// import _ from 'lodash';
import './style.css';

const listArray = [
  {
    description: 'Workout at 6am',
    completed: true,
    index: 1,
  },
  {
    description: 'Complete projects',
    completed: false,
    index: 2,
  },
  {
    description: 'Clean the house',
    completed: true,
    index: 3,
  },
];

listArray.forEach((listObj) => {
  const { description, completed, index } = listObj;
  const ulLists = document.querySelector('.ul-lists');

  const list = document.createElement('li');
  list.setAttribute('class', 'li-list');
  list.setAttribute('id', index);
  ulLists.appendChild(list);

  const checkCont = document.createElement('div');
  checkCont.className = 'checkbox-cont';
  list.appendChild(checkCont);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = completed;
  checkCont.appendChild(checkbox);

  const paragraph = document.createElement('p');
  paragraph.textContent = description;
  checkCont.appendChild(paragraph);

  const ellipsis = document.createElement('i');
  ellipsis.setAttribute('class', 'fa fa-ellipsis-v');
  list.appendChild(ellipsis);
});
