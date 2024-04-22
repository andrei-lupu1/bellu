import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarouselModule, MatButtonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  images = [
    {
    url: '/assets/images/home/1.jpg',
    }, 
    {
      url: '/assets/images/home/2.jpg',
    }, 
    {
      url: '/assets/images/home/3.jpg',
    }
  ];

}