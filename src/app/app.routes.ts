import { Routes } from '@angular/router';
import { AdminPageComponent } from './pages/adminpage/adminpage.component'; 
import { AppComponent } from './app.component'; // Import AppComponent
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto
    { path: 'login', component: LoginComponent }, // Ruta para la página de login
    { path: 'pages', component: AdminPageComponent }, // Ruta para la página de administración
  ];

