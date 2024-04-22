import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-descopera',
  standalone: true,
  imports: [NgbCarouselModule, MatCardModule],
  templateUrl: './descopera.component.html',
  styleUrl: './descopera.component.scss'
})
export class DescoperaComponent {

  images = [
    {
    url: '/assets/images/descopera/1.png',
    }, 
    {
      url: '/assets/images/descopera/2.png',
    }, 
    {
      url: '/assets/images/descopera/3.png',
    },
    {
      url: '/assets/images/descopera/4.png',
    },
    {
      url: '/assets/images/descopera/5.png',
    },
    {
      url: '/assets/images/descopera/6.png',
    },
    {
      url: '/assets/images/descopera/7.png',
    },
    {
      url: '/assets/images/descopera/8.png',
    },
    {
      url: '/assets/images/descopera/9.png',
    },
    {
      url: '/assets/images/descopera/10.png',
    }
  ];

}
