import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [MessageService],
})
export class AuthComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async sendForm(): Promise<void> {
    const loginResponse = await this.authService.login(
      this.username,
      this.password
    );

    if (loginResponse) {
      this.router.navigate(['/admin']);
    } else {
      {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Contraseña o usuario incorrecto',
        });
      }
    }
  }
}
