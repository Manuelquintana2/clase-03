import { Routes } from '@angular/router';
import { Home } from './components/home/home';                 // tu componente Home
import { Login } from './components/login/login'; // componente Login
import { Register } from './components/register/register';  // componente Register

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
