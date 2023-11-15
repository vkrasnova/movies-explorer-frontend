import Api from './Api';
import { URL } from '../../utils/constants';

class MainApi extends Api {

  /*** AUTH ***/

  register = ({ name, email, password }) => {

    return this._request('signup', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password })
    });

  }

  authorize = ({ email, password }) => {

    return this._request('signin', {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ email, password })
    })

  }

  logout = () => {
    return this._request('signout', {
      method: 'GET',
      headers: this._headers,
      credentials: 'include'
    })
  }

  /*** USER DATA ***/

  getUserInfo = () => {

    return this._request('users/me', {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    });

  }

  updateUserInfo({ name, email }) {

    return this._request('users/me', {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ name, email })
    });

  }

  /*** MOVIES ***/

  getUserMovies = () => {

    return this._request('movies', {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    });

  }

  saveMovie = (movie) => {

    return this._request('movies', {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(movie)
    })

  }

  deleteMovie = (movieID) => {
    return this._request(`movies/${movieID}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    });
  }

  changeSavedStatus(movieID, isSaved) { // ОСТАВИТЬ?
    if (isSaved) {
      return this.deleteMovie(movieID);
    } else {
      return this.saveMovie(movieID);
    }
  }

}

export const mainApi = new MainApi({
  url: URL.MAIN_API,
  headers: {
    "Content-Type": "application/json",
  }
});