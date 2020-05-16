import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreMessagesService {
  constructor() { }

  messages = [
    {
      id: 1,
      name: 'Михаил',
      message: 'Какое то текстовое сообщение.',
      img: 'https://via.placeholder.com/500x500?text=Visit',
      date: '28 Янв, 14 : 05',
      position: 'Бухгалтер',
      main: false
    },
    {
      id: 2,
      name: 'Анастасия',
      message: 'Во тьме ночной, при свете дня, написать этот текст',
      img: 'https://via.placeholder.com/500x500?text=Visit',
      date: '09 Окт, 14 : 05',
      position: '',
      main: false
    },
    {
      id: 3,
      name: 'Андрей',
      message: 'Мы Вам все перевели, работаем!',
      img: 'https://via.placeholder.com/500x500?text=Visit',
      date: '09 Окт, 14 : 05',
      position: '',
      main: false
    },
    {
      id: 4,
      name: 'Михаил',
      message: 'Во тьме ночной, при свете дня, написать этот текст',
      img: 'https://via.placeholder.com/500x500?text=Visit',
      date: '09 Окт, 14 : 05',
      position: '',
      main: false
    },
    {
      id: 5,
      name: 'Михаил',
      message: 'Во тьме ночной, при свете дня, написать этот текст',
      img: 'https://via.placeholder.com/500x500?text=Visit',
      date: '09 Окт, 14 : 05',
      position: '',
      main: false
    },
    {
      id: 6,
      name: 'Эм, виртуальный асситент',
      message: 'Во тьме ночной, при свете дня, написать этот текст',
      img: 'https://via.placeholder.com/500x500?text=Visit',
      date: '09 Окт, 14 : 05',
      position: '',
      main: true
    },
  ];

  showChat = true;

  showPersonal = 'users';

  togglePersonal() {
    return (this.showPersonal = 'person');
  }
  toggleUsers() {
    return this.showPersonal = 'users';
  }

  toggleShowChat() {
    return (this.showChat = !this.showChat);
  }
  closeChat() {
    return (this.showChat = false);
  }


}
