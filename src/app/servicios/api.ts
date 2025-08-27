import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { expand, Observable } from 'rxjs';

export interface Pais {
  name: { common: string };
  flags: { png: string; svg: string };
  getFlagUrl(): string;
}
export type Paises = {
  getFlagUrl(): string;
}

@Injectable({
  providedIn: 'root'
})
export class Api {
  private apiUrl = 'https://restcountries.com/v3.1/all?fields=name,flags';

  constructor(private http: HttpClient) {}

  getPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.apiUrl);
  }
}
