import { RenderPosition, renderElement} from './utils.js';
import SiteMenuView from './view/site-menu-view.js';
import FilmListTemplate  from './view/site-filmsList-view';
import FilmsCardTemplate from './view/site-film-сard-view.js';
import SiteUserTitle from './view/site-users-title-view.js';
import ShowMoreButtonView from './view/site-show-more-button-view.js';
import  FilmsPopupTemplate  from './view/site-popup-view.js';
import CommentsCardTemplate  from './view/site-comment-view.js';
import FilmListContainer  from './view/site-filmListContainer-view';
import SiteGenreTemplate  from './view/site-genres-view';
import SiteFilterView  from './view/site-filter-view';

import { generateFilm } from './mock/films.js';
const siteHeader = document.querySelector('header');
const siteMainElement = document.querySelector('.main');
const CARDS_NUMBERS = 15;
const TASK_COUNT_PER_STEP = 5;
renderElement(siteHeader,  new SiteUserTitle().element,RenderPosition.BEFOREEND);
renderElement(siteMainElement, new SiteMenuView().element, RenderPosition.BEFOREEND);
renderElement(siteMainElement, new SiteFilterView().element, RenderPosition.BEFOREEND);

const FilmListTemplateComponent = new FilmListTemplate();
const FilmListContainerComponent = new FilmListContainer();
renderElement(siteMainElement, FilmListTemplateComponent.element, RenderPosition.BEFOREEND);
renderElement( FilmListTemplateComponent.element,  FilmListContainerComponent.element, RenderPosition.BEFOREEND);

const renderFilm = (FilmListElement, task) =>{
  const filmCard = new FilmsCardTemplate(task);
  const filmPopup = new FilmsPopupTemplate(task);

  const body = document.querySelector('body');

  filmCard.element.querySelector('.film-card__link').addEventListener('click', () =>{

    body.classList.add('hide-overflow');
    document.body.appendChild(filmPopup.element);

    const commentsContainer = filmPopup.element.querySelector('.film-details__comments-list');
    const genreContainer = filmPopup.element.querySelector('.film-details__info-head');
    const comments = task.comments;


    const genreComponent = new SiteGenreTemplate(task);

    renderElement(genreContainer, genreComponent.element, RenderPosition.AFTEREND);

    comments.forEach((comment) =>{
      const filmComments = new CommentsCardTemplate(comment);
      renderElement(commentsContainer, filmComments.element,RenderPosition.BEFOREEND);
    });

  });

  filmPopup.element.querySelector('.film-details__close-btn').addEventListener('click',()=>{
    body.classList.remove('hide-overflow');
    document.body.removeChild(filmPopup.element);

  });

  renderElement(FilmListElement,filmCard.element,RenderPosition.BEFOREEND);


};

const filmsListSection = document.querySelector('.films-list');
const tasks = Array.from({length: CARDS_NUMBERS}, generateFilm);
for (let i = 0; i <Math.min(tasks.length, TASK_COUNT_PER_STEP); i++) {

  renderFilm( FilmListContainerComponent.element, tasks[i]);

}


if (tasks.length > TASK_COUNT_PER_STEP) {
  let renderedTaskCount = TASK_COUNT_PER_STEP;
  renderElement(filmsListSection, new ShowMoreButtonView().element, RenderPosition.BEFOREEND);
  const loadMoreButton = document.querySelector('.films-list__show-more');
  loadMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    tasks
      .slice(renderedTaskCount, renderedTaskCount + TASK_COUNT_PER_STEP)
      .forEach((task) =>renderFilm( FilmListContainerComponent.element, task) );

    renderedTaskCount += TASK_COUNT_PER_STEP;

    if (renderedTaskCount >= tasks.length) {
      loadMoreButton.remove();
    }
  });

}

