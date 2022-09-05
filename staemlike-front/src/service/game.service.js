import axios from 'axios';
import { GameDTO } from '../components/Game.vue';

const url = 'http://localhost:3000';

export function getAllGame() {
  return axios
    .get(`${url}/games`)
    .then((response) => response.data.map((game) => new GameDTO(game.name, game.checked, game._id)))
    .catch((err) => []);
}

export function addGame(name) {
  return axios
    .post(`${url}/games`, { name: name })
    .then((response) => new GameDTO(response.data.name, response.data.checked, response.data._id));
}

export function updateGameCheck(id, checked) {
  return axios.patch(`${url}/games/${id}`, { checked });
}

export function deleteGame(id) {
  return axios.delete(`${url}/games/${id}`);
}
