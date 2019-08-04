import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AddUserComponent } from './component/add/add-user/add-user.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './component/edit/edit-user/edit-user.component';
import { DetailsUserComponent } from './component/details/details-user/details-user.component';
import { AddUserResponseComponent } from './component/add/add-user-response/add-user-response.component';
import { EditUserResponseComponent } from './component/edit/edit-user-response/edit-user-response.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddUserComponent,
    EditUserComponent,
    DetailsUserComponent,
    AddUserResponseComponent,
    EditUserResponseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
