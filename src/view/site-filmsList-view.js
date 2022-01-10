import {createElement} from '../utils.js';

const createFilmsListTemplate = () => (
  `<section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

    <div class="films-list__container">
    </div>
    </section>`
);
export default class FilmListTemplate {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {

    return  createFilmsListTemplate();

  }

  removeElement() {
    this.#element = null;
  }
}
