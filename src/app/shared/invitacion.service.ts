import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invitacion } from '../interfaces/Invitacion';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvitacionService {
  private apiUrl = `${environment.apiUrl}/invitacion`;
  public invitaciones: Invitacion[] = [];

  constructor(private http: HttpClient) {}

  async findAll() {
    return (this.invitaciones = await firstValueFrom(
      this.http.get<Invitacion[]>(this.apiUrl)
    ));
  }
}
