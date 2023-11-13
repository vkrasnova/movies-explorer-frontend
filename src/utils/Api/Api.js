class Api {

  constructor(options) {
    this._baseURL = options.url;
    this._headers = options.headers;
  }

  _checkResponse = (res) => {

  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);

  }

  _request = (url, options) => {

    return fetch((`${this._baseURL}/${url}`), options)
      .then(this._checkResponse);

  }

}

export default Api;