import '../styles/content.css';

function menuSection(section) {
  const sectionContainer = document.createElement('div');
  const heading = document.createElement('h1');
  heading.classList.add('section-heading');

  heading.textContent = section;

  sectionContainer.append(heading);

  return sectionContainer;
}

export default menuSection;