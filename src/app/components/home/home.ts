import { Component, OnInit } from '@angular/core';
import { Banderas } from '../../servicios/banderas';
import { FormsModule } from '@angular/forms';
import { Api, Pais } from '../../servicios/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home{
  paises : Pais[] = [];
  cargando = true;
  dato:string;
  constructor(private banderasService : Banderas, private apiService: Api) { 
    this.dato = "";
  }
  
  ngOnInit(): void {
    this.apiService.getPaises().subscribe({
      next: (data) => {
        this.paises = data;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar paises:', error);
        this.cargando = false;
      }
    });
  }

  setDato(){
    this.banderasService.setDato(this.dato);
  }
  getDato():void{
   this.dato = this.banderasService.getDato();
  }
}
