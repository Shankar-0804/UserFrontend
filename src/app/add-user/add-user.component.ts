import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userData: any = {
    name: '',
    city: '',
    state: '',
    country: '',
    age: 0
  };

  constructor(private userService: UserService) { }

  addUser(): void {
    this.userService.addUser(this.userData)
      .subscribe(
        response => {
          console.log('User added successfully:', response);
          // Handle success (if needed)
        },
        error => {
          console.error('Error adding user:', error);
          // Handle error (if needed)
        }
      );
  }
}
