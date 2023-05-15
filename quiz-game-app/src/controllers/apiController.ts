import axios from "axios";

const API_URL = 'http://localhost:3333/';

export default class ApiController {
  async login(username: string, password: string) {
    try {
      const response = await axios.post(API_URL + 'login', {
        username,
        password
      });
      return response.data;
    }
    catch (err: any) {
      return err
    }
  }

  async register(userData: Object) {
    try {
      const response = await axios.post(API_URL + 'signup', userData);
      return response.data;
    }
    catch (err: any) {
      return err
    }
  }
}
