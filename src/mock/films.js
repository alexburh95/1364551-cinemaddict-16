const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const FILMS_TITLES = [
  'Матрица',
  'Человек-Паук',
  'Доктор Стрэндж',
  'Железный человек',
  'Тор',
  'Капитан Совок',
];

const AUTHORS =[
  'Igor Akinfeev','Kirill Nababkin', 'Mario Fernandes', 'Harry Kane', 'Daniil Medvedev'
];

const WRITERS=[
  'Babar Ahmed','Lewis Allen','Lindsay Anderson','Michael Anderson','Michael Apted',
];
const ACTORS = [
  'Jason Statham',
  'Tom Hardy',
  'Idris Elba',
  'Tom Hiddleston',
  'Ewan McGregor',
  'Henry Cavill',
];
const FILMS_POSTERS = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-man-with-the-golden-arm.jpg',
  'the-great-flamarion.jpg',
];

const FILSM_DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
];

const FILSM_GENRES = [
  'Comedy',
  'Musical',
  'Horor',
  'Thriller',
  ' Drama',
  'Fantasy',
];

const COUNTRY =[
  'USA', 'Russia', 'China', 'France', 'England', 'Germany',
];
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
  const DESCRIPTIONS_MAX = 5;
  const DESCRIPTIONS_MIN = 0;
  const descriptionsArray = [];
  for (
    let i = 0;
    i < getRandomInteger(DESCRIPTIONS_MAX, DESCRIPTIONS_MIN);
    i++
  ) {
    descriptionsArray.push(generateRandom(FILSM_DESCRIPTIONS));
  }

  const description = descriptionsArray.join(' ');

  return description;
};

const generateRating=() =>{
  const rating = `${getRandomInteger(1, 9)}.${getRandomInteger(1, 9)}`;
  return rating;
};
const generateDuration = () => {
  const duration = `${getRandomInteger(1, 3)}h ${getRandomInteger(0, 59)}m`;
  return duration;
};

const commentionEmotions = ['smile', 'sleeping', 'puke', 'angry'];

const generateComments = () => ({
  id: getRandomInteger(0,100),
  author: generateRandom(AUTHORS),
  comment: generateDescriptions(),
  date: '2019-05-11T16:12:32.554Z',
  emotion: generateRandom(commentionEmotions),


});
const comments =Array.from({length: getRandomInteger(0, 5)}, generateComments);

export const generateFilm = () => ({
  comments: comments,
  title: generateRandom(FILMS_TITLES),
  poster: generateRandom(FILMS_POSTERS),
  raiting: generateRating(),
  description: generateDescriptions(),
  relizeYear: getRandomInteger(1950, 2021),
  duration: generateDuration(),
  generes: randomArray(FILSM_GENRES),
  country: generateRandom(COUNTRY),
  alternativeTitle: generateRandom(FILMS_TITLES),
  writers: randomArray(WRITERS),
  actors:randomArray(ACTORS),
  isFavorite: false,
  isWatched: false,
});
