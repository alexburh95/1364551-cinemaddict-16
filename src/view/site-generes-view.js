

const generToggle = (array) => {
  let checker;
  if(array.length>1){
    checker ='Genres';}
  else{
    checker ='Genre';

  }


  return checker;
};

const generateGenere = (element) => {

  const description = element.join('  ');

  const createGener =  ` <span class="film-details__genre">${description}</span>`;


  return createGener;
};

export const createSiteGeneresSection = (array) => ` <tr class="film-details__row">
  <td class="film-details__term">${generToggle(array)}</td>
  <td class="film-details__cell">


${generateGenere(array)}

</tr>
  `;

