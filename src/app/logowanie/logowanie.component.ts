import { Component } from '@angular/core';

@Component({
  selector: 'app-logowanie',
  standalone: true,
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent {
  onSubmit() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;


    if (username === 'admin' && password === 'admin') {
      alert('Zalogowano pomyślnie!');
    } else {
      alert('Nieprawidłowe dane logowania.');
    }
  }
}