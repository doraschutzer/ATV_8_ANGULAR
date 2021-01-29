import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  msg: any;

  constructor(
    private auth: AuthService) {
  }

  login(usuario: string, senha: string): void {
    this.auth.login(usuario, senha)
    .then(() => {
      this.msg = 'redirecionar para /cliente/list';
    })
    .catch(() => {
      this.msg = 'Usuário ou senha inválida!';
    });
  }

}
