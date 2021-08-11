import axios from 'axios';
const BASE_URL = 'https://swapi.dev/api/films';

const getMovies = async () => {
  try {
    if (!localStorage.getItem('movies')) {
      const res = await axios.get(BASE_URL);
      const data = await res.data.results;
      localStorage.setItem('movies', JSON.stringify(data));
      return data;
    }
    
    const localStorageMovies = JSON.parse(localStorage.getItem('movies'));
    return localStorageMovies;
  } catch (error) {
    console.log(error);
  }
};

export default { getMovies };
