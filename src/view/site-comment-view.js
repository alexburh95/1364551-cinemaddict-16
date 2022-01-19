import AbstractView from './abstract-view.js';
export const createSiteComments = (comments) => {
  const {author, comment, date, emotion} = comments;
  return `<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-sleeping">
  </span>
  <div>
    <p class="film-details__comment-text">${comment}</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${author}</span>
      <span class="film-details__comment-day">${date}</span>
      <button class="film-details__comment-delete">Delete</button>
    </p>
  </div>
  </li>`;
};

export default class CommentsCardTemplate  extends AbstractView {
  #task = null;

  constructor(task) {
    super();
    this.#task = task;


  }


  get template() {
    return createSiteComments(this.#task);
  }


}
