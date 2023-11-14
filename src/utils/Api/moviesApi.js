import Api from './Api';
import { URL } from '../../utils/constants';

class MoviesApi extends Api {

  getMoviesList = () => {

    return this._request('', {
      method: 'GET',
      headers: this._headers,
    });

  }

}

export const moviesApi = new MoviesApi({
  url: URL.MOVIES_API,
  headers: {
    "Content-Type": "application/json",
  }
});