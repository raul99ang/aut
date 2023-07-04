
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {ClientesModel} from '../models/Clientes.model';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  Lavado2Url: string = `${environment.baseUrl}/Clientes`;
  constructor(private readonly http: HttpClient) {}

  getClientesById(id: number) {
    return lastValueFrom(this.http.get<ClientesModel>(`${this.Lavado2Url}/${id}`));
  }

  getClientes(): Promise<ClientesModel[]> {
    return lastValueFrom(this.http.get<ClientesModel[]>(`${this.Lavado2Url}`));
  }

  postClientes(clientes: ClientesModel) {
    
    return lastValueFrom(this.http.post(`${this.Lavado2Url}`, clientes));
  }
  putClientes(clientes: ClientesModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Lavado2Url}`, clientes));
  }

  deleteClientes(id: any) {
    return lastValueFrom(this.http.delete(`${this.Lavado2Url}/${id}`));
  }
}