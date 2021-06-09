import template from '../templates/item-image.hbs';

export default function createListImages(items, place) {
  items.forEach(element => {
    place.insertAdjacentHTML('beforeend', template(element));
  });
}
