import axios from "axios";

const API_URL = 'http://localhost:3333/';

export default class ApiController {
  async login(username: string, password: string) {
    const localData = {
      user: localStorage.getItem('user'),
      token: localStorage.getItem('token')
    }
    if (localData.user && localData.token) return false
    try {
      const response = await axios.post(API_URL + 'login', {
        username,
        password
      });
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
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
