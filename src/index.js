// import _ from 'lodash';
import './style.css';

import { addList, displayList, removeList } from './modules/UI.js';
import clearCompleted from './modules/Clear_all.js';
import localGet from './modules/Store.js';

const form = document.querySelector('.add-list');
const todoTask = document.getElementById('input');
const clearAll = document.getElementById('complete-btn');
const rotate = document.getElementById('rotate');

window.addEventListener('load', () => {
  displayList();
});

window.removeList = removeList;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addList(todoTask.value, false, localGet().length + 1);
  displayList();
});