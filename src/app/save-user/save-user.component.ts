import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent {

  constructor(private service : UserService ) {}

  onSubmit(data : any){
    this.service.saveUser(data).subscribe((result : any)=>{
      console.log(result);
    })
  };
}
  

  
    
    

    

 
  

