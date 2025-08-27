import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Banderas {
  public dato:string;
  constructor() { 
    this.dato = "";
  }

  setDato(dato:string){
    this.dato = dato;
  }
  getDato():string{
    return this.dato;
  }
}
