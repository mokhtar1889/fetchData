import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interface/user';

@Pipe({
  name: 'seachUser',
  standalone: true,
})
export class SeachUserPipe implements PipeTransform {
  transform(users: User[], searchKey: string): User[] {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchKey.toLowerCase())
    );
  }
}
