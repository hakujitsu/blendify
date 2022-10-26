import axios from 'axios'

export const authInstance = axios.create({
  baseURL: 'https://accounts.spotify.com',
  timeout: 5000,
});


export const instance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  timeout: 5000,
});

