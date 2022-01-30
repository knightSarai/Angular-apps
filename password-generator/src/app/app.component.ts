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
    let validChoices = '';
    if (this.useLetters) validChoices += letters;
    if (this.useNumbers) validChoices += numbers;
    if (this.useSymbols) validChoices += symbols;
    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChoices.length);
      generatedPassword += validChoices[randomIndex]?? "";
    }
    this.password = generatedPassword
  }

  // Add copy to clipboard functionality
}
