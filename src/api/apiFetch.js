import axios from 'axios';
import { API_BASE, DEFAULT_HEADERS } from './constants';
import { fetchCatsPending, fetchCatsSuccess, fetchCatsError } from '../actions';

export const fetchCatsVotesAndFavs = () => dispatch => {
  dispatch(fetchCatsPending());
  axios
    .all([
      axios.get(`${API_BASE}/votes`, { headers: DEFAULT_HEADERS }),
      axios.get(`${API_BASE}/favourites`, { headers: DEFAULT_HEADERS }),
      axios.get(`${API_BASE}/images/?limit=96`, { headers: DEFAULT_HEADERS })
    ])
    .then(
      axios.spread((votes, favourites, cats) => {
        dispatch(
          fetchCatsSuccess({
            votes: [...votes.data],
            favourites: [...favourites.data],
            cats: [...cats.data]
          })
        );
      })
    )
    .catch(error => dispatch(fetchCatsError(error.response)));
};
