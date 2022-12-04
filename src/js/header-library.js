// ----------------Переключение между кнопками-----------------

const headerWatchedButtonEl = document.querySelector('.js-watched');
const headerQueueButtonEl = document.querySelector('.js-queue');

headerWatchedButtonEl.addEventListener('click', onWatched);
headerQueueButtonEl.addEventListener('click', onQueue);

function onWatched() {
  headerWatchedButtonEl.classList.add('header__button--active');
  headerQueueButtonEl.classList.remove('header__button--active');
}

function onQueue() {
  headerWatchedButtonEl.classList.remove('header__button--active');
  headerQueueButtonEl.classList.add('header__button--active');
}
