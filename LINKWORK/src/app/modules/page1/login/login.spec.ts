import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Login } from './login';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Login],
      imports: [
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not set a message when fields are empty', () => {
    component.entrar();
    expect(component.mensagem).toBe('');
  });

  it('should set a simulation message when fields are filled', () => {
    component.email = 'aluno@email.com';
    component.senha = '123456';
    component.entrar();
    expect(component.mensagem).toContain('Simulação');
  });

  it('should clear fields and message', () => {
    component.email = 'aluno@email.com';
    component.senha = '123456';
    component.mensagem = 'x';
    component.limpar({ resetForm: () => {} } as unknown as NgForm);
    expect(component.mensagem).toBe('');
  });
});
