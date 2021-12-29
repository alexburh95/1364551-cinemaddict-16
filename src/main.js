import { renderTemplate, RenderPosition } from './utils.js';
import {createSiteMenuTemplate} from './view/site-menu-view.js';
import {createFilmsListTemplate} from './view/site-filmsList-view';
import { createFilmsCardTemplate } from './view/site-film-сard-view.js';
import { createUsersTitleTemplate } from './view/site-users-title-view.js';
import {createShowMoreButtonTemplate} from './view/site-show-more-button-view.js';
import { createSitePopupTemplate } from './view/site-popup-view.js';
import { createSiteComments } from './view/site-comment-view';

import { generateRandom } from './mock/films.js';

import { generateFilm } from './mock/films.js';
const siteHeader = document.querySelector('header');
const siteMainElement = document.querySelector('.main');
const CARDS_NUMBERS = 15;
const TASK_COUNT_PER_STEP = 5;
renderTemplate(siteHeader,  createUsersTitleTemplate,RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilmsListTemplate(), RenderPosition.BEFOREEND);

const filmListContainer = document.querySelector('.films-list__container');
const filmsListSection = document.querySelector('.films-list');
const tasks = Array.from({length: CARDS_NUMBERS}, generateFilm);
for (let i = 0; i <Math.min(tasks.length, TASK_COUNT_PER_STEP); i++) {

  renderTemplate(filmListContainer, createFilmsCardTemplate(tasks[i]), RenderPosition.BEFOREEND);

}

renderTemplate(document.body, createSitePopupTemplate(generateRandom(tasks)), RenderPosition. BEFOREEND);
const commentsContainer = document.querySelector('.film-details__comments-list');

for(let i =0; i<tasks[i].comments.length; i++){

  renderTemplate(commentsContainer, createSiteComments(tasks[i].comments[i]),RenderPosition.BEFOREEND);
}
if (tasks.length > TASK_COUNT_PER_STEP) {
  let renderedTaskCount = TASK_COUNT_PER_STEP;
  renderTemplate(filmsListSection, createShowMoreButtonTemplate(), RenderPosition.BEFOREEND);
  const loadMoreButton = document.querySelector('.films-list__show-more');
  loadMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    tasks
      .slice(renderedTaskCount, renderedTaskCount + TASK_COUNT_PER_STEP)
      .forEach((task) => renderTemplate(filmListContainer, createFilmsCardTemplate(task), RenderPosition.BEFOREEND));

    renderedTaskCount += TASK_COUNT_PER_STEP;

    if (renderedTaskCount >= tasks.length) {
      loadMoreButton.remove();
    }
  });

}

