import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SaveUserComponent } from './save-user/save-user.component';


const routes: Routes = [
  {path: 'users', component: UserListComponent},
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {path: 'saveUser', component: SaveUserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
