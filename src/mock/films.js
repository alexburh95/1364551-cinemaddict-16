import { arraysLists } from './seed';

const DESCRIPTIONS_MAX = 5;

const DESCRIPTIONS_MIN = 0;

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};


export const generateRandom = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};


const randomArray = (array) => {
  const MIN = 1;
  const MAX = array.length;
  const newArray = [];
  for (let i = 0; i < getRandomInteger(MIN, MAX); i++) {
    newArray.push(array[i]);
  }
  return newArray;
};
const generateDescriptions = () => {

  const generateDescriptionHandler = ()=> generateRandom(arraysLists.FILSM_DESCRIPTIONS);
  const description = Array.from({length: getRandomInteger(DESCRIPTIONS_MIN, DESCRIPTIONS_MAX)},generateDescriptionHandler).join(' ');


  return description;
};

const generateRating=() =>`${getRandomInteger(1, 9)}.${getRandomInteger(1, 9)}`;

const generateDuration = () =>`${getRandomInteger(1, 3)}h ${getRandomInteger(0, 59)}m`;


const generateComments = () => ({
  id: getRandomInteger(0,100),
  author: generateRandom(arraysLists.AUTHORS),
  comment: generateDescriptions(),
  date: '2019-05-11T16:12:32.554Z',
  emotion: generateRandom(arraysLists.commentionEmotions),


});
const comments =Array.from({length: getRandomInteger( DESCRIPTIONS_MIN, DESCRIPTIONS_MAX )}, generateComments);

export const generateFilm = () => ({
  comments: comments,
  title: generateRandom(arraysLists.FILMS_TITLES),
  poster: generateRandom(arraysLists.FILMS_POSTERS),
  raiting: generateRating(),
  description: generateDescriptions(),
  relizeYear: getRandomInteger(1950, 2021),
  duration: generateDuration(),
  generes: randomArray(arraysLists.FILSM_GENRES),
  country: generateRandom(arraysLists.COUNTRY),
  alternativeTitle: generateRandom(arraysLists.FILMS_TITLES),
  writers: randomArray(arraysLists.WRITERS),
  actors:randomArray(arraysLists.ACTORS),
  favorite: false,
  watched: false,
  watchlist: false,
});
