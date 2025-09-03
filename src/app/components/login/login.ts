import { Component } from '@angular/core';
import { Supabase } from '../../servicios/supabase';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [CommonModule, FormsModule, RouterLink],
})
export class Login {
   email = '';
  password = '';
  errorMessage = '';

  constructor(private supabase: Supabase, private router: Router) {}

  async login() {
    this.errorMessage = '';
    if (!this.email || !this.password) {
      this.errorMessage = 'Email y contraseña son requeridos.';
      return;
    }

    try {
      const { user, session } = await this.supabase.login(this.email, this.password);

      if (user) {
        // aunque session sea null, tenemos el user
        console.log('Usuario logueado:', user.email);
        this.router.navigate(['/home']);
      }
    } catch (error: any) {
      this.errorMessage = error.message || 'Error al iniciar sesión';
    }
  }
}
