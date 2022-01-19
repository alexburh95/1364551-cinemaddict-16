import AbstractView from './abstract-view.js';


const generToggle = (array) => (array.length>1)?'Genres':'Genre';

const generateGenre = (genres) => {

  const description = genres.join('  ');

  const createGener =  `<span class="film-details__genre">${description}</span>`;

  return createGener;
};


const createSiteGeneresSection = (task) => {

  const {duration, generes, country,writers, actors,} = task;
  return`<table class="film-details__table">
<tr class="film-details__row">
  <td class="film-details__term">Director</td>
  <td class="film-details__cell">Anthony Mann</td>
</tr>
<tr class="film-details__row">
  <td class="film-details__term">Writers</td>
  <td class="film-details__cell">${writers}</td>
</tr>
<tr class="film-details__row">
  <td class="film-details__term">Actors</td>
  <td class="film-details__cell">${actors}</td>
</tr>
<tr class="film-details__row">
  <td class="film-details__term">Release Date</td>
  <td class="film-details__cell">30 March 1945</td>
</tr>
<tr class="film-details__row">
  <td class="film-details__term">Runtime</td>
  <td class="film-details__cell">${duration}</td>
</tr>
<tr class="film-details__row">
  <td class="film-details__term">Country</td>
  <td class="film-details__cell">${country}</td>
</tr>
<tr class="film-details__row">
  <td class="film-details__term">${generToggle(generes)}</td>
  <td class="film-details__cell">${generateGenre(generes)}</td>
</tr>
</table>`;
};


export default class SiteGenreTemplate extends AbstractView{

    #task = null;

    constructor(task) {
      super();
      this.#task = task;


    }


    get template() {

      return createSiteGeneresSection(this.#task);

    }

}


