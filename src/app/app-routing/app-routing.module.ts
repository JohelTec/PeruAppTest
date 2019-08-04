import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { AddUserComponent } from '../component/add/add-user/add-user.component';
import { EditUserComponent } from '../component/edit/edit-user/edit-user.component';
import { DetailsUserComponent } from '../component/details/details-user/details-user.component';
import { AddUserResponseComponent } from '../component/add/add-user-response/add-user-response.component';
import { EditUserResponseComponent } from '../component/edit/edit-user-response/edit-user-response.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { 
    path: 'addusers',
    component: AddUserComponent 
  },
  { 
    path: 'detailsusers/:id',
    component: DetailsUserComponent 
  },
  { 
    path: 'editusers/:id',
    component: EditUserComponent 
  },
  { 
    path: 'addusersResponse',
    component: AddUserResponseComponent 
  },
  { 
    path: 'editusersResponse',
    component: EditUserResponseComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
