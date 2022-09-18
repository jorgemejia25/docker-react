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
  public confirmados: number = 0;
  public rechazados: number = 0;
  public pendientes: number = 0;

  constructor(private http: HttpClient) {}

  async findAll() {
    this.invitaciones = await firstValueFrom(
      this.http.get<Invitacion[]>(this.apiUrl)
    );

    this.calcularTotales();

    return this.invitaciones;
  }

  async create(invitacion: Partial<Invitacion>) {
    const res = await firstValueFrom(
      this.http.post<Invitacion>(this.apiUrl, invitacion)
    );

    this.invitaciones.push(res);

    this.calcularTotales();
  }

  async update(invitacion: Partial<Invitacion>) {
    const res = await firstValueFrom(
      this.http.put<Invitacion>(`${this.apiUrl}/${invitacion.id}`, invitacion)
    );

    const index = this.invitaciones.findIndex(
      (inv) => inv.id === invitacion.id
    );

    this.invitaciones[index] = res;

    this.calcularTotales();
  }

  async delete(id: number) {
    await firstValueFrom(this.http.delete(`${this.apiUrl}/${id}`));

    this.invitaciones = this.invitaciones.filter((inv) => inv.id !== id);

    this.calcularTotales();
  }

  calcularTotales() {
    this.confirmados = this.invitaciones
      .filter((inv) => inv.estado === 'Confirmado')
      .reduce((acc, inv) => acc + inv.invitaciones, 0);

    this.rechazados = this.invitaciones
      .filter((inv) => inv.estado === 'Rechazado')
      .reduce((acc, inv) => acc + inv.invitaciones, 0);

    this.pendientes = this.invitaciones
      .filter((inv) => inv.estado === 'Pendiente')
      .reduce((acc, inv) => acc + inv.invitaciones, 0);
  }

  async getInvitacion(id: number) {
    return await firstValueFrom(
      this.http.get<Invitacion>(`${this.apiUrl}/${id}`)
    );
  }

  async confirmar(id: number, confirmados: number) {
    return await firstValueFrom(
      this.http.get(`${this.apiUrl}/confirmar/${id}`, {
        params: { confirmados },
      })
    );
  }

  async rechazar(id: number) {
    return await firstValueFrom(this.http.get(`${this.apiUrl}/rechazar/${id}`));
  }
}
