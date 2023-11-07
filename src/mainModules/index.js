import navigationModule from './navigationModule.js';
import showcaseModule from './showcaseModule.js';
import contentModule from './contentModule.js'
import { aboutModule } from './aboutModule.js';
import '../styles/index.css';

document.body.append(navigationModule());
document.body.append(showcaseModule.render());
document.body.append(contentModule.initialRender());

document.addEventListener('DOMContentLoaded', () => {
  contentModule.renderContent(aboutModule.render());
})