'use strict';
const array = [1, 2, 3, 4, 5, 6, 7];
const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
};
removeElement(array, 1);
module.exports = { removeElement };
