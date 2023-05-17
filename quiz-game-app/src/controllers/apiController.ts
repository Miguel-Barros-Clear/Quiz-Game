import axios from "axios";

const API_URL = 'http://localhost:3333/';
const router = window.location
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
      return router.reload()

    }
    catch (err: any) {
      return err
    }
  }

  async register(userData: any) {
    try {
      const response = await axios.post(API_URL + 'signup', userData).then(async (res) => {
        await this.login(userData.username, userData.password)
      })
      return router.reload()
    }
    catch (err: any) {
      return err
    }
  }

  async logout() {
    try {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      return router.reload()
    } catch (err) {
      return err
    }
  }
}
