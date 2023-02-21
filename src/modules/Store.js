const localGet = () => {
  const storage = JSON.parse(localStorage.getItem('listStorage')) || [];
  return storage;
};
export default localGet;