const BASE_URL = `http://localhost:${process.env.SERVER_PORT}/api/v1`;

class HTTPClient {
  request(method: string, route: string): Promise<Response> {
    const url = BASE_URL + route;

    return fetch(url, {
      method,
    });
  }

  async getInternshipEntries(): Promise<any> {
    const response = await this.request("GET", "/internships");
    const json = await response.json();

    if (response.ok) {
      return json.response;
    }

    throw new Error(json.error);
  }
}

export default HTTPClient;
