/**
 * @jest-environment jsdom
 */

import { addList, removeList } from './UI.js';

document.body.innerHTML = `
<section>
      <h1 class="todo-h1">My To Do List</h1>
          <span class="line"></span>
      <div class="todo-container">

        <div class="top-div">
          <p class="top-p">Today's to do</p>
          <i class="fa-sharp fa-solid fa-arrows-rotate" id="rotate"></i>
        </div>

        <form action="submit" class="add-list">
          <input type="text" name="add-lists" id="input" class="input" placeholder="Add to your list..." required>
          <button type="submit" id="added" class="add-btn">Add</button>
        </form><hr>

        <div id="listItem"></div>
        <div class="complete-cont">
          <button type="submit" id="complete-btn" class="complete-btn">Clear all completed</button>
        </div>
        
      </div>
    </section>
`;

describe('When we add and delete basic items', () => {
  test('If we add an item, it should have one list', () => {
    // Arrange
    addList('Hello, I am Hermon', false, 0);
    // Act
    const data = document.querySelectorAll('.toDoItem');
    // Asset
    expect(data).toHaveLength(1);
  });

  test('If we add another item, it should have two list', () => {
    // Arrange
    addList('Hi, I am Dheeraj', true, 1);
    // Act
    const data = document.querySelectorAll('.toDoItem');
    // Asset
    expect(data).toHaveLength(2);
  });

  test('If we add another item, it should have three list', () => {
    // Arrange
    addList('Hey, I am Hiwot', false, 2);
    // Act
    const data = document.querySelectorAll('.toDoItem');
    // Asset
    expect(data).toHaveLength(3);
  });

  });