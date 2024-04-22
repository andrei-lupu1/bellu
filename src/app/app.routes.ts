import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DescoperaComponent } from './descopera/descopera.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'descopera', component: DescoperaComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', component: HomeComponent }
];
