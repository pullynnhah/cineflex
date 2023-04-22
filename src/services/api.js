import axios from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v8/cineflex";

export function getMovies() {
  return axios.get(`${BASE_URL}/movies`);
}

export function getShowtimes(idMovie) {
  return axios.get(`${BASE_URL}/movies/${idMovie}/showtimes`);
}

export function getSeats(idShowtime) {
  return axios.get(`${BASE_URL}/showtimes/${idShowtime}/seats`);
}

export function postPurchase(data) {
  return axios.post(`${BASE_URL}/seats/book-many`, data);
}
