import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-edit-user-response',
  templateUrl: './edit-user-response.component.html',
  styleUrls: ['./edit-user-response.component.css']
})
export class EditUserResponseComponent implements OnInit {
  obj:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getObj();
  }
  back(){
    this.location.back();
  }
  getObj(){
    let currentService = [];
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.datos) {
        currentService = JSON.parse(params.datos);
        this.obj = currentService;
      }
    })
  }

}
