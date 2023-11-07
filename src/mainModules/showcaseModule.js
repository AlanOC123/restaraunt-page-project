import '../styles/showcase.css';
import image from '../assets/index-showcase.jpg'

const showcase = (() => {
  const render = () => {
    const showcaseContainer = document.createElement('div');
    showcaseContainer.style.backgroundImage = `url(${image})`;
    showcaseContainer.classList.add('showcase');
    return showcaseContainer;
  }

  const changeImage = imageSource => {
    console.log(imageSource);
    const container = document.querySelector('.showcase');
    container.style.backgroundImage = `url(${imageSource})`;
  }

  return {
    render,
    changeImage
  }

})()

export default showcase;