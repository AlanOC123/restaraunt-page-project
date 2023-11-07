import dataClean from "../utils/dataClean";
import menuSection from '../utils/menuSection';
import card from '../utils/card.js';
import showcaseModule from "./showcaseModule.js";
import '../styles/content.css';

const menuModule = (() => {
  const render = () => {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('container');

    const category = Object.keys(dataClean);
    for (let i = 0; i < category.length; i++) {
      const section = menuSection(category[i]);
      const items = dataClean[category[i]];
      
      for (let j = 0; j < items.length; j++) {
        const menuCard = card(items[j]);
        section.append(menuCard);

        menuCard.addEventListener('click', () => {
          const imageSrc = menuCard.childNodes[0].firstChild.src;
          showcaseModule.changeImage(imageSrc);
        })
      }
      menuContainer.append(section);
    }

    return menuContainer;
  }

  return {
    render
  }
})()

export default menuModule;