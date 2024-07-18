import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../interface/user';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SeachUserPipe } from '../pipe/seach-user.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    SeachUserPipe,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  users: User[] = [];
  searchKey: string = '';

  constructor(private _userService: UserService) {
    this.getUserData();
  }

  getUserData() {
    this._userService.getUsersData().subscribe({
      next: (res) => {
        this.users = res;
        console.log(this.users);
      },
    });
  }
}
