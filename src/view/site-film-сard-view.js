
import AbstractView from './abstract-view.js';
const createFilmsCardTemplate = (task) => {
  const {title, poster,raiting, description, relizeYear, duration, generes, comments} = task;
  return `<article class="film-card">
  <a class="film-card__link">
  <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating"${raiting}</p>
    <p class="film-card__info">
      <span class="film-card__year">${relizeYear}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${generes}</span>
    </p>
    <img src="./images/posters/${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <span class="film-card__comments">${comments.length}</span> comments</span>
  </a>
  <div class="film-card__controls">
    <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`;
};
export default class FilmsCardTemplate extends AbstractView {
  #task = null;

  constructor(task) {
    super();
    this.#task = task;

  }


  get template() {
    return createFilmsCardTemplate(this.#task);
  }

  setEditClickHandler = (callback) => {
    this._callback.editClick = callback;
    this.element.querySelector('.film-card__link').addEventListener('click', this.#editClickHandler);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.editClick();
  }


}
