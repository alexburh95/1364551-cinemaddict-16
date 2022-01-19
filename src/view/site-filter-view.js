
import AbstractView from './abstract-view.js';


export const createSiteFilterTemplate = () => (
  `<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
</ul>`);


export default class SiteFilterView extends AbstractView {


  get template() {
    return createSiteFilterTemplate();
  }


}
