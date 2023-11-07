import '../styles/content.css';

const contactModule = (() => {

  const hours = {
    'Monday': '08:00 - 22:00',
    'Tuesday': '08:00 - 22:00',
    'Wednesday': '08:00 - 22:00',
    'Thursday': '08:00 - 22:00',
    'Friday': '08:00 - 22:00',
    'Saturday': '09:00 - 21:00',
    'Sunday': '09:00 - 21:00',
    'Bank Holdays': '09:00 - 21:00'
  }

  const render = () => {
    const contactContainer = document.createElement('div');
    const openingHoursCard = openingHours(hours);
    const locationCard = location();

    contactContainer.classList.add('container');
    contactContainer.append(...[openingHoursCard, locationCard]);

    return contactContainer;
  }

  const openingHours = hours => {
    const days = Object.keys(hours);
    const container = document.createElement('div');
    const heading = document.createElement('h1');
    const isOpenorClosed = isOpen();

    container.classList.add('contact-card');
    heading.classList.add('section-heading');
    isOpenorClosed.classList.add('section-heading');
    heading.textContent = 'Opening Hours';
    container.append(heading);
    
    for (let i = 0; i < days.length; i++) {
      const card = document.createElement('div');
      const day = document.createElement('p');
      const time = document.createElement('p');

      card.classList.add('contact-section');
      day.classList.add('contact-heading');
      time.classList.add('contact-text');

      day.textContent = days[i];
      time.textContent = hours[days[i]];

      card.append(...[day, time]);
      container.append(card);
    }

    container.append(isOpenorClosed);

    return container;
  }

  const location = () => {
    const locationContainer = document.createElement('div');
    const heading = document.createElement('h2');
    const address1 = document.createElement('p');
    const address2 = document.createElement('p');
    const address3 = document.createElement('p');
    const eircode = document.createElement('p');

    locationContainer.classList.add('contact-card');
    heading.classList.add('section-heading');
    address1.classList.add('contact-text');
    address2.classList.add('contact-text');
    address3.classList.add('contact-text');
    eircode.classList.add('contact-text');

    heading.textContent = 'Location';
    address1.textContent = 'Dublin Docklands';
    address2.textContent = 'Dublin 2';
    address3.textContent = 'County Dublin';
    eircode.textContent = 'D02 A433';

    locationContainer.append(...[heading, address1, address2, address3, eircode]);

    return locationContainer;
  }

  const isOpen = () => {
    const date = new Date();
    const hour = date.getHours();
    const day = date.getDay();

    const notification = document.createElement('p');

    if ((hour === 9 && day <= 4) || (hour === 7 && day > 4)) {
      notification.textContent = 'Closing Soon (Scroll Down for Location)';
    } else if (((hour > 22 && hour < 8) && day <= 4) || ((hour > 21 && hour < 9) && day <= 4)) {
      notification.textContent = 'We\'re Closed (Scroll Down for Location)';
    } else {
      notification.textContent = 'We\'re Open (Scroll Down for Location)';
    }

    notification.setAttribute('id', 'opening-notification');

    return notification;
  }

  return { render }
})()

export default contactModule