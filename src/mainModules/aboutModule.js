import '../styles/content.css';

const aboutModule = (() => {
  const render = () => {

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('container');

    const ourReasonContainer = document.createElement('div');
    ourReasonContainer.classList.add('text-container');
    const ourReasonHeading = document.createElement('h2');
    ourReasonHeading.classList.add('about-heading');
    const ourReasonText = document.createElement('p');
    ourReasonText.classList.add('about-text');

    const ourPhilosophyContainer = document.createElement('div');
    ourPhilosophyContainer.classList.add('text-container');
    const ourPhilosophyHeading = document.createElement('h2');
    ourPhilosophyHeading.classList.add('about-heading');
    const ourPhilosophyText = document.createElement('p');
    ourPhilosophyText.classList.add('about-text');

    const ourDifferenceContainer = document.createElement('div');
    ourDifferenceContainer.classList.add('text-container');
    const ourDifferenceHeading = document.createElement('h2');
    ourDifferenceHeading.classList.add('about-heading');
    const ourDifferenceText = document.createElement('p');
    ourDifferenceText.classList.add('about-text');

    const ourFoodContainer = document.createElement('div');
    ourFoodContainer.classList.add('text-container');
    const ourFoodHeading = document.createElement('h2');
    ourFoodHeading.classList.add('about-heading');
    const ourFoodText = document.createElement('p');
    ourFoodText.classList.add('about-text');

    const ourInviteContainer = document.createElement('div');
    ourInviteContainer.classList.add('text-container');
    const ourInviteHeading = document.createElement('h2');
    ourInviteHeading.classList.add('about-heading');
    const ourInviteText = document.createElement('p');
    ourInviteText.classList.add('about-text');

    ourReasonHeading.textContent = "Our Reason";
    ourReasonText.textContent = 'In the vibrant city of Dublin, Trattoria BellaVista is a slice of Italy offering a haven of gourmet tranquility. This cherished establishment is the vision of a family devoted to the art of Italian cuisine, bringing time-honored recipes that have traveled through family lines to our local community.'

    ourPhilosophyHeading.textContent = "Our Philosophy";
    ourPhilosophyText.textContent = 'At Trattoria BellaVista, our philosophy is simple: every meal is a small festival, an occasion to share and enjoy. We source the finest local produce, combining it with traditional Italian cooking techniques to create dishes that are both innovative and comforting. Our menu is a loving tribute to the diverse regions of Italy, from the rolling landscapes of Tuscany to the crystal-clear waters of the Amalfi Coast.';

    ourDifferenceHeading.textContent = "Our Difference";
    ourDifferenceText.textContent = "The ambiance of Trattoria BellaVista marries rustic authenticity with contemporary ease, ensuring a warm and inviting dining experience. Whether you're here for a light-hearted lunch, a romantic dinner, or a celebration, we are committed to providing an unforgettable dining experience."

    ourFoodHeading.textContent = "Our Food"
    ourFoodText.textContent = "Indulge in our handcrafted pastas, succulent wood-fired pizzas, and luscious desserts, each a homage to the spirited flavors of Italy and an insight into our culinary passion. At Trattoria BellaVista, our dishes are not just food; they are narratives of Italian heritage and a promise of comfort that stays with you long after your visit."

    ourInviteHeading.textContent = "So Come Along";
    ourInviteText.textContent = "We invite you to Trattoria BellaVista in the heart of Dublin, where every bite is a story, and every guest is family.";

    ourReasonContainer.append(...[ourReasonHeading, ourReasonText]);
    ourPhilosophyContainer.append(...[ourPhilosophyHeading, ourPhilosophyText]);
    ourDifferenceContainer.append(...[ourDifferenceHeading, ourDifferenceText]);
    ourFoodContainer.append(...[ourFoodHeading, ourFoodText]);
    ourInviteContainer.append(...[ourInviteHeading, ourInviteText]);

    contentContainer.append(...[
      ourReasonContainer, 
      ourPhilosophyContainer, 
      ourDifferenceContainer, 
      ourFoodContainer, 
      ourInviteContainer
    ])

    return contentContainer;
  }

  return {
    render
  }
})()  

export { aboutModule }