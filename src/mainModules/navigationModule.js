import '../styles/nav.css'
import { aboutModule } from './aboutModule.js';
import contentModule from './contentModule.js';
import menuModule from './menuModule.js';
import contactModule from './contactModule.js';
import image from '../assets/logo.png';

export default function navigation() {
  const navigation = document.createElement('div');
  const logoContainer = document.createElement('div');
  const navItems = document.createElement('div');
  const logoImageContainer = document.createElement('div');
  const logoTextContainer = document.createElement('div');
  const logoImage = new Image();
  const logoText = document.createElement('h1');
  const menuButton = document.createElement('button');
  const aboutButton = document.createElement('button');
  const contactButton = document.createElement('button');

  navigation.classList.add('nav');
  logoContainer.classList.add('logo');
  navItems.classList.add('nav-items');
  logoImageContainer.setAttribute('id', 'logo-image');
  logoTextContainer.setAttribute('id', 'logo-text');

  logoImage.src = image;
  logoText.textContent = 'Trattoria BellaVista';
  menuButton.textContent = 'Menu';
  aboutButton.textContent = 'About';
  contactButton.textContent = 'Contact';

  aboutButton.addEventListener('click', () => {
    contentModule.renderContent(aboutModule.render());
  });

  menuButton.addEventListener('click', () => {
    contentModule.renderContent(menuModule.render());
  })

  contactButton.addEventListener('click', () => {
    contentModule.renderContent(contactModule.render());
  })


  logoContainer.append(...[logoImageContainer, logoTextContainer]);
  logoImageContainer.append(logoImage);
  logoTextContainer.append(logoText);
  navItems.append(...[menuButton, aboutButton, contactButton]);
  navigation.append(...[logoContainer, navItems]);

  return navigation;
}