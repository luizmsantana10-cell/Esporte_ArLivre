import { Injectable } from '@angular/core';
import { Atleta } from '../models/Atleta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtletaServiceService {

  constructor(private http: HttpClient) { }

  listarAtletas(): Observable<Atleta[]> {
    const urlApi = 'https://6a835f65cb486d243403a6c8.mockapi.io/esportearlivre/Atleta'
    return this.http.get<Atleta[]>(urlApi)
  }

  listarAtleta(idAtleta: number): Observable<Atleta> {
    const urlApi = `https://6a835f65cb486d243403a6c8.mockapi.io/esportearlivre/Atleta/${idAtleta}`
    return this.http.get<Atleta>(urlApi)
  }

  salvarAtleta(atleta: Atleta): Observable<Atleta> {
    const urlApi = 'https://6a835f65cb486d243403a6c8.mockapi.io/esportearlivre/Atleta'
    return this.http.post<Atleta>(urlApi, atleta)
  }

  excluirAtleta(idAtleta: number): Observable<Atleta> {
    const urlApi = `https://6a835f65cb486d243403a6c8.mockapi.io/esportearlivre/Atleta/${idAtleta}`
    return this.http.delete<Atleta>(urlApi)
  }

  alterarAtleta(atleta: Atleta): Observable<Atleta> {
    const urlApi = `https://6a835f65cb486d243403a6c8.mockapi.io/esportearlivre/Atleta/${atleta.id}`
    return this.http.put<Atleta>(urlApi, atleta)
  }
}

