import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { PerfilModel } from 'src/models/Perfiles.model';
@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  Lavado2Url: string = `${environment.baseUrl}/Perfiles`;
  constructor(private readonly http: HttpClient) {}

  getPerfil(Id: string) {
    return lastValueFrom(this.http.get<PerfilModel>(`${this.Lavado2Url}/${Id}`));
  }

  getPerfiles(): Promise<PerfilModel[]> {
    return lastValueFrom(this.http.get<PerfilModel[]>(`${this.Lavado2Url}`));
  }

  postPerfil(perfil: PerfilModel) {
    return lastValueFrom(this.http.post(`${this.Lavado2Url}`, perfil));
  }
  putPerfil(perfil: PerfilModel, Id: string) {
    console.log(perfil);
    return lastValueFrom(this.http.put(`${this.Lavado2Url}`, perfil));
  }

  deletePerfil(Id: any) {
    return lastValueFrom(this.http.delete(`${this.Lavado2Url}/${Id}`));
  }
}
