import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['pages']); // Redirige a la página de administración
    } else {
      Swal.fire({
        title: "INCORRECTO",
        text: "Usuario o password incorrectos",
        icon: "error"
      });
    }
  }
}
