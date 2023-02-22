import localGet from './Store.js';

const clearCompleted = () => {
  let incompleted = localGet().filter((item) => {
    if (!item.completed) {
      return item;
    }
    return null;
  });

  incompleted = incompleted.map((item, id) => {
    item.index = id + 1;
    return item;
  });

  localStorage.setItem('listStorage', JSON.stringify(incompleted));
  window.location.reload();
};

export default clearCompleted;