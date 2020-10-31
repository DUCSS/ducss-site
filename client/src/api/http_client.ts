import { InternshipEntry } from '../interfaces/database_types';

let PORT = process.env.REACT_APP_SERVER_PORT_HTTPS;
let PROTOCOL = 'https://';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  PORT = process.env.REACT_APP_SERVER_PORT_HTTP;
  PROTOCOL = 'http://';
}

const BASE_URL = `${PROTOCOL}${process.env.REACT_APP_HOST}:${PORT}/api/v1`;

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
