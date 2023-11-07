import data from '../assets/menu-items.csv';
const path = require.context('../assets/recipe-images');

const dataClean = (() => {
  const array = Array.from(data);
  const menuItems = {};

  for (let i = 0; i < array.length; i++) {
    const category = array[i][0];
    const name = array[i][1];
    const description = array[i][2];
    const image = path.keys().map(path)[i];

    if (!menuItems[category]) {
      menuItems[category] = [];
    }

    const menuItem = {
      itemName: name,
      itemDescription: description,
      itemImage: image
    }

    menuItems[category].push(menuItem);
  }

  return menuItems
})()

export default dataClean;