import axios from 'axios';
const BASE_URL = 'https://swapi.dev/api/films';

const getMovies = async () => {
  try {
    const res = await axios.get(BASE_URL);
    const data = await res.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default { getMovies };
