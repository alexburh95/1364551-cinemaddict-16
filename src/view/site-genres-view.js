

const generToggle = (array) => (array.length>1)?'Genres':'Genre';

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

