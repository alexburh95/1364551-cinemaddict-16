import { RenderPosition, render } from './utils.js';
import SiteUserTitle from './view/site-users-title-view.js';
import MoviePresenter from './presenter/movie-presenter.js';
import { generateFilm } from './mock/films.js';
const siteHeader = document.querySelector('header');
const siteMainElement = document.querySelector('.main');
const CARDS_NUMBERS = 15;

render(siteHeader, new SiteUserTitle(), RenderPosition.BEFOREEND);

const moviePresenter = new MoviePresenter(siteMainElement);

const tasks = Array.from({ length: CARDS_NUMBERS }, generateFilm);

moviePresenter.init(tasks);
