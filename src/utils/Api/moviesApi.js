import Api from './Api';
import { MOVIES_API_URL } from '../../utils/constants';

class MoviesApi extends Api {

  getMoviesList = () => {

    return this._request('', {
      method: 'GET',
      headers: this._headers,
    });

  }

}

export const moviesApi = new MoviesApi({
  url: MOVIES_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
});