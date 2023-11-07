import '../styles/card.css';

const card = item => {
  const name = item.itemName;
  const description = item.itemDescription;
  const image = item.itemImage;
  
  const cardContainer = document.createElement('div');

  const imageContainer = document.createElement('div');
  const textContainer = document.createElement('div');

  const itemImage = document.createElement('img');
  const itemHeading = document.createElement('h2');
  const itemDescription = document.createElement('p');

  cardContainer.classList.add('card');

  imageContainer.classList.add('card-image-container');
  textContainer.classList.add('card-text-container');

  itemImage.src = image;
  itemHeading.textContent = name;
  itemDescription.textContent = description;

  imageContainer.append(itemImage);
  textContainer.append(...[itemHeading, itemDescription]);

  cardContainer.append(...[imageContainer, textContainer]);

  return cardContainer;
}

export default card;