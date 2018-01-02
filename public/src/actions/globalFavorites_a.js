import axios from 'axios';
import { setFavorites } from './favorites_a.js';

export function retrieveGlobalFavorites() {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `/api/globalFavorites/`,
      responsetype: 'json'
    }).then((res) => {
      dispatch(setFavorites(res.data));
    })
    .catch((err) => {console.log(err)});
  }
}