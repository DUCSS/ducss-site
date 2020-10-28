import { InternshipEntry } from '../interfaces/database_types';

let BASE_URL = `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/v1`;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  BASE_URL = `http://${BASE_URL}`;
} else {
  BASE_URL = `https://${BASE_URL}`;
}

class HTTPClient {
  static request(method: string, route: string): Promise<Response> {
    const url = BASE_URL + route;

    return fetch(url, {
      method,
    });
  }

  static async getInternshipEntries(): Promise<[InternshipEntry]> {
    const response = await HTTPClient.request('GET', '/internships');
    const json = await response.json();

    if (response.ok) {
      return json.response;
    }

    throw new Error(json.error);
  }
}

export default HTTPClient;
