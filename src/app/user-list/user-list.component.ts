import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: any[] = [];
  showSuccessMessage : boolean = false;
  newUser : any = {};

  private url = 'http://localhost:8080/api/users';

  constructor(private service : UserService, private router: Router) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.service.getUsers().subscribe(
      (data: any[]) => {
        this.userList = data;
      },
      (error : any) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  
  onSubmitNewUser() {
    

    this.service.saveUser(this.newUser).subscribe(
      (response) => {
        
        this.showSuccessMessage = true;

        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000);
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }
}
