import {createSiteMenuTemplate} from './view/site-menu-view.js';
import {createFilmsListTemplate} from './view/site-filmsList-view';
import { createFilmsCardTemplate } from './view/site-film-сard-view.js';
import { createUsersTitleTemplate } from './view/site-users-title-view.js';
import {createShowMoreButtonTemplate} from './view/site-show-more-button-view.js';
import { createSitePopupTemplate } from './view/site-popup-view.js';
import { renderTemplate, RenderPosition } from './utils.js';
const siteHeader = document.querySelector('header');
const siteMainElement = document.querySelector('.main');
const CARDS_NUMBERS = 5;

renderTemplate(siteHeader,  createUsersTitleTemplate,RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilmsListTemplate(), RenderPosition.BEFOREEND);

const filmListContainer = document.querySelector('.films-list__container');
const filmsListSection = document.querySelector('.films-list');

for (let i = 0; i < CARDS_NUMBERS; i++) {
  renderTemplate(filmListContainer, createFilmsCardTemplate(), RenderPosition.BEFOREEND);
}
renderTemplate(filmsListSection, createShowMoreButtonTemplate(), RenderPosition.BEFOREEND);
renderTemplate(document.body, createSitePopupTemplate(), RenderPosition. BEFOREEND);
