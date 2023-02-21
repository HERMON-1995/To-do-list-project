// import _ from 'lodash';
import './style.css';

import { addList, displayList } from './modules/UI.js';
import localGet from './modules/Store.js';

const form = document.querySelector('.add-list');
const todoTask = document.getElementById('input');

window.addEventListener('load', () => {
  displayList();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addList(todoTask.value, false, localGet().length + 1);
  displayList();
});