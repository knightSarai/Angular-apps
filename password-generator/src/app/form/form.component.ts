import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  password = ''
  passwordLength = 8;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  generateDisabled() {
    return !(this.useLetters || this.useNumbers || this.useSymbols) || this.passwordLength <= 0;
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
      generatedPassword += validChoices[randomIndex] ?? "";
    }
    this.password = generatedPassword
  }

  ngOnInit(): void {
  }

}
