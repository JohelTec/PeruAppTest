import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Services/service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any = [];
  constructor(
    private serviceService: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.init();
  }
  init(){
    this.serviceService.getUsers().subscribe( response => {
      this.users = response.data;
    });
  }
  addUsers(){
    this.router.navigate(['/addusers'])
  }
  editUser(id){
    this.router.navigate(['/addusers',id])
  }

}
