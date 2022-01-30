import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-generator';
  password = ''
  passwordLength = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onChangeLength(event: Event) {
    const inputValue = (<HTMLInputElement>event.target).value;
    const parsedValue = parseInt(inputValue);
    if (!isNaN(parsedValue)) this.passwordLength = parsedValue;
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  generatePassword() {
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    this.password = this.passwordLength > 0 ?
      Array(this.passwordLength)
        .fill(0)
        .map(() => {
          const random = Math.floor(Math.random() * 3);
          switch (random) {
            case 0:
              return this.useLetters ? letters[Math.floor(Math.random() * letters.length)] : '';
            case 1:
              return this.useNumbers ? numbers[Math.floor(Math.random() * numbers.length)] : '';
            case 2:
              return this.useSymbols ? symbols[Math.floor(Math.random() * symbols.length)] : '';
            default:
              return '';
          }
        })
        .join('') : '';
  }
}
