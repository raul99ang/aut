import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {SistemaContableModel} from '../models/SistemaContable.model';
@Injectable({
  providedIn: 'root'
})
export class SistemaContableService {

  Lavado2Url: string = `${environment.baseUrl}/SistemaContable`;
  constructor(private readonly http: HttpClient) {}

  getVentaById(id: number) {
    return lastValueFrom(this.http.get<SistemaContableModel>(`${this.Lavado2Url}/${id}`));
  }

  getVenta(): Promise<SistemaContableModel[]> {
    return lastValueFrom(this.http.get<SistemaContableModel[]>(`${this.Lavado2Url}`));
  }

  getVentas(): Observable<SistemaContableModel[]> {
    return this.http.get<SistemaContableModel[]>(this.Lavado2Url);
  }

  postVenta(sistemacontable: SistemaContableModel) {
    
    return lastValueFrom(this.http.post(`${this.Lavado2Url}`, sistemacontable));
  }
  putVenta(sistemacontable: SistemaContableModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Lavado2Url}`, sistemacontable));
  }

  deleteVenta(id: any) {
    return lastValueFrom(this.http.delete(`${this.Lavado2Url}/${id}`));
  }
}