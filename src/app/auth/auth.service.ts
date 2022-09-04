import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  async login(username: string, password: string) {
    try {
      const res = await firstValueFrom(
        this.http.post<{
          access_token: string;
        }>(`${this.apiUrl}/login`, {
          username,
          password,
        })
      );

      localStorage.setItem('access_token', res.access_token);

      return !!res.access_token;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
}
