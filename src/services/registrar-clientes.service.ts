import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';
import { ClientesModel } from 'src/models/Clientes.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrarClientesService {

  Lavado2Url: string = `${environment.baseUrl}/Clientes`;
  constructor(private readonly http: HttpClient) {}

  getClienteById(id: number): Observable<ClientesModel> {
    return this.http.get<ClientesModel>(`${this.Lavado2Url}/${id}`);
  }

  getCliente(): Observable<ClientesModel[]> {
    return this.http.get<ClientesModel[]>(`${this.Lavado2Url}`);
  }

  postCliente(clientes: ClientesModel): Observable<any> {
    return this.http.post(`${this.Lavado2Url}`, clientes);
  }

  putCliente(clientes: ClientesModel, id: number): Observable<any> { 
    return this.http.put(`${this.Lavado2Url}/${id}`, clientes);
  }

  deleteCliente(id: any): Observable<any> {
    return this.http.delete(`${this.Lavado2Url}/${id}`);
  }
}
