import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

export default function addModalWindow(e) {
  if (e.target === e.currentTarget) return;
  if (e.target.hasAttribute('src') === false) return;
  const template = basicLightbox.create(
    `<img src="${e.target.dataset.src}" width="800" height="600">`,
  );
  template.show();
}
