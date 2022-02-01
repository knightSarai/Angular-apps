import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  password = ''
  passwordLength = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  formInputs = [
    {
      name: 'passwordLength',
      label: 'Password Length',
      type: 'text',
      classes: '',
      inputClasses: 'form-control',
      labelClasses: 'form-label',
      value: this.passwordLength,
      callback: (event: Event) => this.onChangeLength(event)
    },
    {
      name: 'letters',
      label: 'Use Letters',
      type: 'checkbox',
      inputClasses: 'form-check-input',
      classes: 'form-check',
      labelClasses: 'form-check-label',
      value: this.useLetters,
      callback: () => this.onChangeUseLetters()
    },
    {
      name: 'numbers',
      label: 'Use Numbers',
      type: 'checkbox',
      inputClasses: 'form-check-input',
      classes: 'form-check',
      labelClasses: 'form-check-label',
      value: this.useNumbers,
      callback: () => this.onChangeUseNumbers()
    },
    {
      name: 'symbols',
      label: 'Use Symbols',
      type: 'checkbox',
      inputClasses: 'form-check-input',
      classes: 'form-check',
      labelClasses: 'form-check-label',
      value: this.useSymbols,
      callback: () => this.onChangeUseSymbols()
    },
  ]

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
      generatedPassword += validChoices[randomIndex] ?? "";
    }
    this.password = generatedPassword
  }

  ngOnInit(): void {
  }

}
