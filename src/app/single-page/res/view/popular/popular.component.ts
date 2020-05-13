import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  popularNews = [
    {
      id: 1,
      title: 'Психоанализ дает код в силу которого смешивает субъективное и объективное',
      category: 'Новости',
      img: 'assets/img/img1.jpg',
    },
    {
      id: 2,
      title:
        'Психоанализ дает код в силу которого смешивает субъективное и объективное',
      category: 'Вебинар',
      img: 'assets/img/img5.png',
    },
    {
      id: 3,
      title:
        'Психоанализ дает код в силу которого смешивает субъективное и объективное',
      category: 'Жалобы',
      img: 'assets/img/img12.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
