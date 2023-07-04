
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {SucursalModel} from '../models/Sucursal.model';
@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  Lavado2Url: string = `${environment.baseUrl}/Sucursal`;
  constructor(private readonly http: HttpClient) {}

  getSucursalById(sucursal: number) {
    return lastValueFrom(this.http.get<SucursalModel>(`${this.Lavado2Url}/${sucursal}`));
  }

  getSucursal(): Promise<SucursalModel[]> {
    return lastValueFrom(this.http.get<SucursalModel[]>(`${this.Lavado2Url}`));
  }

  postSucursal(sucursal: SucursalModel) {
    
    return lastValueFrom(this.http.post(`${this.Lavado2Url}`, sucursal));
  }
  putSucursal(sucursal: SucursalModel, Sucursal: number) { 
    return lastValueFrom(this.http.put(`${this.Lavado2Url}`, sucursal));
  }

  deleteSucursal(sucursal: any) {
    return lastValueFrom(this.http.delete(`${this.Lavado2Url}/${sucursal}`));
  }
}