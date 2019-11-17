import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

  movies = [
    {
      id: 1,
      title: 'Dumbo',
      category: 'Animation',
      year: 2019,
      watched: false,
        actors: [
          'elephant',
          'little boy'
        ]
    },

    {
      id: 2,
      title: 'Titanic',
      category: 'Drama',
      year: 2000,
      watched: true,
        actors: [
          'Leonardo DiCaprio',
          'Kate Winslet'
        ]
    },

    {
      id: 3,
      title: 'Scary Movie 3',
      category: 'Comedy',
      year: 2004,
      watched: true,
        actors: [
          'Charlie Sheen'
        ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  

}
