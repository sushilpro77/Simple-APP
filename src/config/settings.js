
let API_URL = 'https://agile-hamlet-65644.herokuapp.com/api/v1';
if (process.env.NODE_ENV === 'production') {
  API_URL = 'https://agile-hamlet-65644.herokuapp.com/api/v1/'; // your production server url
}

export const Constants={
  DATA_PER_PAGE:10
}

export const settings = {
  env: process.env.NODE_ENV,
  API_URL,
};


export default settings;