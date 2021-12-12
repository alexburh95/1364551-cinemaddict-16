import {createSiteMenuTemplate} from './view/site-menu-view.js';
import {createFilmsListTemplate} from './view/site-filmsList-view';
import { createFilmsCardTemplate } from './view/site-filmCard-view.js';
import { createUsersTitleTemplate } from './view/site-usersTitle-view.js';
import {createShowMoreButtonTemplate} from './view/site-showMoreButton-view.js';
import { createSitePopupTemplate } from './view/site-popup-view.js';
const siteHeader = document.querySelector('header');
const siteMainElement = document.querySelector('.main');
const siteFooter = document.querySelector('footer');
const CARDS_NUMBERS = 5;
const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
renderTemplate(siteHeader,  createUsersTitleTemplate,RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilmsListTemplate(), RenderPosition.BEFOREEND);

const filmListContainer = document.querySelector('.films-list__container');
const filmsListSection = document.querySelector('.films-list');

for (let i = 0; i < CARDS_NUMBERS; i++) {
  renderTemplate(filmListContainer, createFilmsCardTemplate(), RenderPosition.BEFOREEND);
}
renderTemplate(filmsListSection, createShowMoreButtonTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteFooter, createSitePopupTemplate(), RenderPosition. AFTEREND);
