import { API_KEY } from '@env'

const BASE_URL = 'https://api.nookipedia.com';


export function getVillagers() {
  return fetch(`${BASE_URL}/villagers`, {
    headers: {
      'X-API-KEY': API_KEY,
    },
  })
    .then(res => res.json())
    .catch(error => {
      console.error("Failed to fetch villagers:", error);
    });
}