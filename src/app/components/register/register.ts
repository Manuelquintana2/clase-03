import { Component } from '@angular/core';
import { Supabase} from '../../servicios/supabase';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  imports: [CommonModule,FormsModule,],
})
export class Register {
  email = '';
  password = '';
  errorMessage = '';
  successMessage = '';

  constructor(private supabase: Supabase) {}

  async register() {
    try {
      await this.supabase.signUp(this.email, this.password);
      this.successMessage = 'Registro exitoso. Revisa tu email para confirmar la cuenta.';
      this.errorMessage = '';
    } catch (error: any) {
      this.errorMessage = error.message || 'Error al registrar';
      this.successMessage = '';
    }
  }
}
