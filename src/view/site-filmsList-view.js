
import AbstractView from './abstract-view.js';
const createFilmsListTemplate = () => (
  `<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>



    </section>
    </section>`
);
export default class FilmListTemplate  extends AbstractView {


  get template() {

    return  createFilmsListTemplate();

  }


}
