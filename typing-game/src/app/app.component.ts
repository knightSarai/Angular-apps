import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  solved = false;

  onTextInput(event: Event) {
    const inputValue = (<HTMLInputElement>event.target).value;
    this.solved = inputValue === this.randomText;

  }
}
