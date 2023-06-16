import axios from "axios";

class ApiClient {
  private apiClient;

  constructor(baseURL: string) {
    this.apiClient = axios.create({ baseURL });
  }

  post(payload: any): Promise<any> {
    return this.apiClient.request({ method: "post", data: payload });
  }
}

const apiClient = new ApiClient("https://api.tigerhall.net/v2/");

export { apiClient as ApiClient };
