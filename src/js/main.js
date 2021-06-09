'use strict';
import images from './apiService';
import createList from './components/createListImages';
import addModalWindowInCurrentItem from './components/modalWindow';

const refs = {
  searchForm: document.querySelector('#search-form'),
  containerForImages: document.querySelector('#gallery'),
  btnLoadMore: document.querySelector('#load-more'),
};

refs.searchForm.addEventListener('submit', searchFromSubmit);
refs.btnLoadMore.addEventListener('click', loadMoreImage);
refs.containerForImages.addEventListener('click', addModalWindowInCurrentItem);
refs.btnLoadMore.disabled = true;

function searchFromSubmit(e) {
  e.preventDefault();
  const inputValue = e.currentTarget.elements.query.value.trim();

  if (inputValue === '') return;

  images.resetPage();
  clearLits();
  refs.btnLoadMore.disabled = false;

  images.searchQuery = inputValue;

  images.fetchImages().then(images => {
    createList(images, refs.containerForImages);
  });
}

function loadMoreImage() {
  images.fetchImages().then(images => {
    createList(images, refs.containerForImages);
  });
  setTimeout(handleButtonClick, 300);
}

function clearLits() {
  refs.containerForImages.innerHTML = '';
}

function handleButtonClick() {
  refs.btnLoadMore.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
