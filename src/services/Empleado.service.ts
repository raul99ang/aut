
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {EmpleadoModel} from '../models/Empleado.model';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  Lavado2Url: string = `${environment.baseUrl}/Empleado`;
  constructor(private readonly http: HttpClient) {}

  getEmpleadoById(id: number) {
    return lastValueFrom(this.http.get<EmpleadoModel>(`${this.Lavado2Url}/${id}`));
  }

  getEmpleado(): Promise<EmpleadoModel[]> {
    return lastValueFrom(this.http.get<EmpleadoModel[]>(`${this.Lavado2Url}`));
  }

  postEmpleado(empleado: EmpleadoModel) {
    return lastValueFrom(this.http.post(`${this.Lavado2Url}`, empleado));
  }
  putEmpleado(empleado: EmpleadoModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Lavado2Url}`, empleado));
  }

  deleteEmpleado(id: any) {
    return lastValueFrom(this.http.delete(`${this.Lavado2Url}/${id}`));
  }
}