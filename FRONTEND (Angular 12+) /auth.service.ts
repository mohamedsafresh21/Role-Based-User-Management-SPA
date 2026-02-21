@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = "http://localhost:3000/api";

  login(data: any) {
    return this.http.post(`${this.api}/login`, data);
  }

  setUser(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user")!);
  }

  isAdmin() {
    return this.getUser()?.role === 'ADMIN';
  }
}
