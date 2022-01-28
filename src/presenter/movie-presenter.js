import FilmListTemplate from '../view/site-filmsList-view';
import FilmsCardTemplate from '../view/site-film-сard-view.js';
import SiteFilterView from '../view/site-filter-view';
import { RenderPosition, render, remove } from '../utils.js';
import SiteMenuView from '../view/site-menu-view.js';
import FilmListContainer from '../view/site-film-list-container-view';
import SiteGenreTemplate from '../view/site-genres-view';
import FilmsPopupTemplate from '../view/site-popup-view.js';
import CommentsCardTemplate from '../view/site-comment-view.js';
import ShowMoreButtonView from '../view/site-show-more-button-view.js';
const TASK_COUNT_PER_STEP = 5;
const body = document.querySelector('body');
const CONTROL_BUTTONS = {
  WATCHED: 'watched',
  FAVORITE: 'favorite',
  WATCHLIST: 'watchlist',
};

export default class MoviePresenter {
  #moviesContainer = null;

  #sortComponent = new SiteFilterView();

  #MovieListComponent = new FilmListTemplate();
  #siteMenuComponent = new SiteMenuView();
  #filmListContainer = new FilmListContainer();

  #tasks = [];

  constructor(moviesContainer) {
    this.#moviesContainer = moviesContainer;
  }

  init = (tasks) => {
    this.#tasks = [...tasks];

    this.#renderMovieBoard();
  };

  #ckeckPopupsCount = () => {
    const popup = body.querySelector('.film-details');
    if (body.contains(popup)) {
      body.removeChild(popup);
    }
  };

  #renderFilmCard = (tasks) => {
    const filmCard = new FilmsCardTemplate(tasks);
    filmCard.setControlButtomClickHandler(CONTROL_BUTTONS.WATCHED);
    filmCard.setControlButtomClickHandler(CONTROL_BUTTONS.FAVORITE);
    filmCard.setControlButtomClickHandler(CONTROL_BUTTONS.WATCHLIST);

    filmCard.setEditClickHandler(() => {
      this.#ckeckPopupsCount();
      body.classList.add('hide-overflow');
      this.#renderFilmPopup(tasks);
    });
    render(this.#filmListContainer, filmCard, RenderPosition.BEFOREEND);
  };

  #renderFilmPopup = (tasks) => {
    const filmPopup = new FilmsPopupTemplate(tasks);

    filmPopup.setControlButtomClickHandler(CONTROL_BUTTONS.WATCHED);

    filmPopup.setControlButtomClickHandler(CONTROL_BUTTONS.FAVORITE);
    filmPopup.setControlButtomClickHandler(CONTROL_BUTTONS.WATCHLIST);
    document.body.appendChild(filmPopup.element);

    filmPopup.setEditClickHandler(() => {
      body.classList.remove('hide-overflow');
      document.body.removeChild(filmPopup.element);
    });
    this.#renderFilmGenreSection(tasks, filmPopup.element);
    this.#renderFilmCommented(tasks.comments, filmPopup.element);
  };

  #renderFilmCommented = (comments, parrent) => {
    const commentsContainer = parrent.querySelector(
      '.film-details__comments-list'
    );
    comments.forEach((comment) => {
      const filmComments = new CommentsCardTemplate(comment);
      render(commentsContainer, filmComments, RenderPosition.BEFOREEND);
    });
  };

  #renderFilmGenreSection = (tasks, parrent) => {
    const genreComponent = new SiteGenreTemplate(tasks);
    const genreContainer = parrent.querySelector('.film-details__info-head');
    render(genreContainer, genreComponent, RenderPosition.AFTEREND);
  };

  #renderFilmCards = (from, to) => {
    this.#tasks
      .slice(from, to)
      .forEach((boardTask) => this.#renderFilmCard(boardTask));
  };

  #getMoviesContainers = () => {
    const filsListContainer =
      this.#MovieListComponent.element.querySelector('.films-list');
    render(
      this.#moviesContainer,
      this.#MovieListComponent,
      RenderPosition.BEFOREEND
    );
    render(
      filsListContainer,
      this.#filmListContainer,
      RenderPosition.BEFOREEND
    );
  };

  #renderMenu = () => {
    render(
      this.#moviesContainer,
      this.#siteMenuComponent,
      RenderPosition.BEFOREEND
    );
  };

  #renderLoadMoreButton = (parrent) => {
    let renderedTaskCount = TASK_COUNT_PER_STEP;
    const filmsListSection = parrent.element.querySelector('.films-list');
    const loadMoreButtonComponent = new ShowMoreButtonView();
    render(filmsListSection, loadMoreButtonComponent, RenderPosition.BEFOREEND);

    loadMoreButtonComponent.setClickHandler(() => {
      this.#tasks
        .slice(renderedTaskCount, renderedTaskCount + TASK_COUNT_PER_STEP)
        .forEach((task) => this.#renderFilmCard(task));

      renderedTaskCount += TASK_COUNT_PER_STEP;

      if (renderedTaskCount >= this.#tasks.length) {
        remove(loadMoreButtonComponent);
      }
    });
  };

  #renderSort = () => {
    render(
      this.#moviesContainer,
      this.#sortComponent,
      RenderPosition.BEFOREEND
    );
    // Метод для рендеринга сортировки
  };

  #renderMovieBoard = () => {
    this.#renderMenu();
    this.#renderSort();
    this.#getMoviesContainers();
    this.#renderFilmCards(0, Math.min(this.#tasks.length, TASK_COUNT_PER_STEP));
    if (this.#tasks.length > TASK_COUNT_PER_STEP) {
      this.#renderLoadMoreButton(this.#MovieListComponent);
    }
  };
}
