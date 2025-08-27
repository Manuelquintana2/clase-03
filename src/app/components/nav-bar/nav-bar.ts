import { Component, inject, OnInit } from '@angular/core';
import { Banderas } from '../../servicios/banderas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  imports: [FormsModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  dato: string;
  banderasService: Banderas;
  constructor() { 
    this.banderasService = inject(Banderas);
    this.dato = "";
  }
  
  setDato(){
    this.banderasService.setDato(this.dato);
  }
  getDato():void{
    this.dato = this.banderasService.getDato();
  }
}
