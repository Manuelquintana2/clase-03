import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Supabase } from '../../servicios/supabase';
import { User } from '@supabase/supabase-js';

@Component({
  selector: 'app-nav-bar',
  imports: [FormsModule, RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar implements OnInit {
  dato: string;
  user: User | null = null;
  
  constructor(private supabase: Supabase) { 
    this.dato = "";
  }
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
  logout() {
    this.supabase.logout();
    this.user = null;
  }
}
