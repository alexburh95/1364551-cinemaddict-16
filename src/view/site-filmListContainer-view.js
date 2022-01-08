import {createElement} from '../utils.js';

const createFilmsListContainer = () => (
  `<div class="films-list__container">
    </div>`
);
export default class FilmListContainer {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {

    return  createFilmsListContainer();

  }

  removeElement() {
    this.#element = null;
  }
}
