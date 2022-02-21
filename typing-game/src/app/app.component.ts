import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  enteredText = '';
  solved = false;

  onTextInput(event: Event) {
    const inputValue = (<HTMLInputElement>event.target).value;
    this.enteredText = inputValue;
    this.solved = inputValue === this.randomText;
  }

  compare(letter: string, enteredLetter: string) {
    if (!enteredLetter) return 'text-muted';
    return letter === enteredLetter ? 'text-success' : 'text-danger';
  }
}
