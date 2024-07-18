import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  user: User = {} as User;
  userId: number = 0;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService
  ) {
    this._activatedRoute.paramMap.subscribe((res: any) => {
      this.userId = res.params.userId;
    });
    this.getUserDetails(this.userId);
  }

  getUserDetails(userId: number) {
    let users = this._userService.getUsersData().subscribe({
      next: (res) => {
        res.forEach((user: User) => {
          if (user.id == userId) {
            this.user = user;
          }
        });
        console.log(this.user);
      },
    });
  }
}
