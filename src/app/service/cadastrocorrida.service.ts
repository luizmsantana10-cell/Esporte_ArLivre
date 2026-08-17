import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadCorrida } from '../models/CadastroCorrida';

@Injectable({
  providedIn: 'root'
})
export class CadastrocorridaService {
  private apiUrl = 'http://localhost:8080/corridas'; // Ajuste para a URL da sua API

  constructor(private http: HttpClient) {}

  salvar(corrida: CadCorrida): Observable<CadCorrida> {
    return this.http.post<CadCorrida>(this.apiUrl, corrida);
  }
}