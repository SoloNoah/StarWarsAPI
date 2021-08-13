import axios from 'axios';
const BASE_URL = 'https://swapi.dev/api/films';

const getMovies = async () => {
  try {
    if (!localStorage.getItem('movies')) {
      const res = await axios.get(BASE_URL);
      const data = await res.data.results;
      const movies = data.map((movie) => ({ ...movie, likedState: false }));
      console.log(movies);
      localStorage.setItem('movies', JSON.stringify(movies));
      return data;
    }

    const parsedMovies = JSON.parse(localStorage.getItem('movies'));
    return parsedMovies;
  } catch (error) {
    console.log(error);
  }
};

export default { getMovies };
