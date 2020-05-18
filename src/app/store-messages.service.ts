import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreMessagesService {
  constructor() {}

  blogCarousel = [
    {
      id: 1,
      title: 'How to optimize your Facebook & Instagram video ads for success',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.',
      img: 'assets/img/main_img.jpg',
      category: 'Blog Post',
      main: true,
      lenta: false,
    },
    {
      id: 2,
      title:
        'Explore instagram Video: How to convert, engagem and get more Insta...',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.',
      img: 'assets/img/img1_thumb.jpg',
      category: 'Report',
      main: false,
      lenta: true,
    },
    {
      id: 3,
      title:
        'Explore instagram Video: How to convert, engagem and get more Insta...',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.',
      img: 'assets/img/img2_thumb.jpg',
      category: 'Blog Post',
      main: false,
      lenta: true,
    },
    {
      id: 4,
      title: 'How to optimize your Facebook & Instagram video ads for success',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.',
      img: 'assets/img/img3_thumb.jpg',
      category: 'Webinar',
      main: false,
      lenta: true,
    },
    {
      id: 5,
      title: 'How to optimize your Facebook & Instagram video ads for success',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.',
      img: 'assets/img/img4_thumb.jpg',
      category: 'Report',
      main: false,
      lenta: true,
    },
  ];

  getBlog() {
    return this.blogCarousel;
  }

  blogPost = [
    {
      id: 1,
      title: 'How to quickly turn your podcast into a video script',
      img: 'assets/img/img7.jpg',
      category: 'Blog Post',
    },
    {
      id: 2,
      title: 'How to quickly turn your podcast into a video script',
      img: 'assets/img/img8.jpg',
      category: 'Blog Post',
    },
    {
      id: 3,
      title: 'How to quickly turn your podcast into a video script',
      img: 'assets/img/img9.jpg',
      category: 'Blog Post',
    },
  ];

  getBlogPost() {
    return this.blogPost;
  }
  popularNews = [
    {
      id: 1,
      title:
        'Психоанализ дает код в силу которого смешивает субъективное и объективное',
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

  getPopularNews() {
    return this.popularNews;
  }

  events = [
    {
      id: 1,
      title: 'The Basic: Structuring Your Video Marketing Strategy',
      category: 'Webinar',
      img: 'assets/img/img13.jpg',
      date: '24 Jun',
    },
    {
      id: 2,
      title: 'How to quickly turn your podcast into a video script',
      category: 'Webinar',
      img: 'assets/img/img14.jpg',
      date: '',
    },
    {
      id: 3,
      title: 'The Basic: Structuring Your Video Marketing Strategy',
      category: 'Webinar',
      img: 'assets/img/img15.jpg',
      date: '24 Jun',
    },
  ];

  getEvents() {
    return this.events;
  }

  messages = [
    {
      id: 1,
      name: 'Михаил',
      message: 'Какое то текстовое сообщение.',
      img: 'https://via.placeholder.com/500x500?text=Visit',
      date: '28 Янв, 14 : 05',
      position: 'Бухгалтер',
      main: false,
    },
    {
      id: 2,
      name: 'Анастасия',
      message: 'Во тьме ночной, при свете дня, написать этот текст',
      img: 'https://via.placeholder.com/500x500?text=Visit',
      date: '09 Окт, 14 : 05',
      position: '',
      main: false,
    },
    {
      id: 3,
      name: 'Андрей',
      message: 'Мы Вам все перевели, работаем!',
      img: 'https://via.placeholder.com/500x500?text=Visit',
      date: '09 Окт, 14 : 05',
      position: '',
      main: false,
    },
    {
      id: 4,
      name: 'Михаил',
      message: 'Во тьме ночной, при свете дня, написать этот текст',
      img: 'https://via.placeholder.com/500x500?text=Visit',
      date: '09 Окт, 14 : 05',
      position: '',
      main: false,
    },
    {
      id: 5,
      name: 'Михаил',
      message: 'Во тьме ночной, при свете дня, написать этот текст',
      img: 'https://via.placeholder.com/500x500?text=Visit',
      date: '09 Окт, 14 : 05',
      position: '',
      main: false,
    },
    {
      id: 6,
      name: 'Эм, виртуальный асситент',
      message: 'Во тьме ночной, при свете дня, написать этот текст',
      img: 'https://via.placeholder.com/500x500?text=Visit',
      date: '09 Окт, 14 : 05',
      position: '',
      main: true,
    },
    {
      id: 7,
      name: 'Михаил',
      message: 'Во тьме ночной, при свете дня, написать этот текст',
      img: 'https://via.placeholder.com/500x500?text=Visit',
      date: '09 Окт, 14 : 05',
      position: '',
      main: false,
    },
    {
      id: 8,
      name: 'Михаил',
      message: 'Во тьме ночной, при свете дня, написать этот текст',
      img: 'https://via.placeholder.com/500x500?text=Visit',
      date: '09 Окт, 14 : 05',
      position: '',
      main: false,
    },
    {
      id: 9,
      name: 'Михаил',
      message: 'Во тьме ночной, при свете дня, написать этот текст',
      img: 'https://via.placeholder.com/500x500?text=Visit',
      date: '09 Окт, 14 : 05',
      position: '',
      main: false,
    },
  ];

  showChat = false;

  showPersonal = 'users';

  togglePersonal() {
    return (this.showPersonal = 'person');
  }
  toggleUsers() {
    return (this.showPersonal = 'users');
  }

  toggleShowChat() {
    return (this.showChat = !this.showChat);
  }
  toggleFiles() {
    return (this.showPersonal = 'files');
  }
  closeChat() {
    return (this.showChat = false);
  }
}
