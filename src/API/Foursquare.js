class Helper {
  static baseURL() {
    return 'https://api.foursquare.com/v2';
  }

  static auth() {
    const keys = {
      client_id: 'HJNNIPI2LLUFNMLQNWRVAJOELZVHCP02VCSIEKK4XNIIS1CB',
      client_secret: 'YTE4A4QEZH0FMUFOWYRLVVPIJX3L0XW3D2K1GJ0GRMWAT2PV',
      v: '20181004'
    };
    // turn keys object into string separated by ampersands
    return Object.keys(keys)
      .map((key) => `${key}=${keys[key]}`)
      .join('&');
  }

  static urlBuilder(urlParams) {
    if (!urlParams) {
      return '';
    }
    return Object.keys(urlParams)
      .map((key) => `${key}=${urlParams[key]}`)
      .join('&');
  }

  static headers() {
    return {
      Accept: 'application/json'
    };
  }

  static handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  // endpoint: inserted after baseURL
  // method: request method
  // urlParams: Foursquare API parameters
  static simpleFetch(endPoint, method, urlParams) {
    let requestData = {
      method,
      headers: Helper.headers()
    };
    return fetch(
      `${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(urlParams)}`,
      requestData
    )
      .then(Helper.handleErrors)

      .then((response) => response.json());
  }
}

export default class FoursquareAPI {
  static search(urlParams) {
    return Helper.simpleFetch('/venues/search', 'GET', urlParams);
  }
  static getVenueDetails(VENUE_ID) {
    return Helper.simpleFetch(`/venues/${VENUE_ID}`, 'GET');
  }
  static getVenuePhotos(VENUE_ID) {
    return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, 'GET');
  }
  static getVenueRecommendations(urlParams) {
    return Helper.simpleFetch(`/venues/explore`, 'GET', urlParams);
  }
}
