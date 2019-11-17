import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Media Watch';
    firstMovie = {
    title: 'Dumbo',
    category: 'Animation',
    year: 2019,
    watched: false,
      actors: [
      'elephant',
      'little boy'
  ]
  };
}
