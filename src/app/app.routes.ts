import { UserDetailsComponent } from './user-details/user-details.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'home' },
  {
    path: 'home/userDetails/:userId',
    component: UserDetailsComponent,
    title: 'user',
  },
];
