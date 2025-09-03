import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Supabase } from '../../servicios/supabase'; // 👈 importar servicio
import { User } from '@supabase/supabase-js';

@Component({
  selector: 'app-home',
  standalone: true, // 👈 si usas Angular standalone
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  cargando = true;
  dato: string = '';
  user: User | null = null;

  constructor(
    private supabase: Supabase
  ) {}

  async ngOnInit(): Promise<void> {
    // obtener user aunque no haya session
    this.user = await this.supabase.getUser();

    // escuchar cambios futuros de auth
    this.supabase.onAuthStateChange((_event, session) => {
      if (session?.user) {
        this.user = session.user;
      }
    });
  }
}
