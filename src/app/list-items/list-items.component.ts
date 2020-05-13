import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent implements OnInit {
  items = [
    {
      id: 1,
      title: 'Annoucing V2.7 Release',
      subTitle:
        'At Froala, our mission has always been about pushing web editing beyond its conceived limits—this vision has served as the guiding philosophy for all Froala releases from Version 1.x to',
      img: 'https://via.placeholder.com/300x300?text=Visit',
      author: 'Kirti Joshi',
      date: 'April 21, 2020'
    },
    {
      id: 2,
      title: 'Doing Wonders With Images In the Froala Editor',
      subTitle:
        'Froala Editor can enhance your editing experience by providing methods to customize and manipulate creative images. Read more to learn what\'s possible!',
      img: 'https://via.placeholder.com/300x300?text=Visit',
      author: 'Kirti Joshi',
      date: 'April 21, 2020'
    },
    {
      id: 3,
      title: 'Quick and Easy Methods to Adjust the Size of Your Froala Editor',
      subTitle:
        'At Froala, our mission has always been about pushing web editing beyond its conceived limits—this vision has served as the guiding philosophy for all Froala releases from Version 1.x to',
      img: 'https://via.placeholder.com/300x300?text=Visit',
      author: 'Kirti Joshi',
      date: 'April 21, 2020'
    },
    {
      id: 4,
      title: 'Using Multiple Froala Editors On a Single Webpage',
      subTitle:
        'Froala Editor can enhance your editing experience by providing methods to customize and manipulate creative images. Read more to learn what\'s possible!',
      img: 'https://via.placeholder.com/300x300?text=Visit',
      author: 'Kirti Joshi',
      date: 'April 21, 2020'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
