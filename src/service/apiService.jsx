import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '2223059c3b0984b00c4d5656092cb839';
axios.defaults.params = { api_key: API_KEY };

export const fetchTrendingMoovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMoviesBySearch = async query => {
  try {
    const response = await axios.get(`/search/movie?query=${query}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMoviesById = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchCastById = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchReviewById = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};


