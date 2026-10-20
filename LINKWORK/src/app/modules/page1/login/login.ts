import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  email = '';
  senha = '';
  mensagem = '';

  entrar(): void {
    if (!this.email.trim() || !this.senha) return;
    // Simulação: ainda não há serviço de autenticação conectado.
    this.mensagem = `Simulação: dados de "${this.email.trim()}" validados. Nenhum login real foi feito.`;
  }

  limpar(form: NgForm): void {
    form.resetForm({ email: '', senha: '' });
    this.mensagem = '';
  }
}
