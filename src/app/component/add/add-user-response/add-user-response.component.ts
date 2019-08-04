import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user-response',
  templateUrl: './add-user-response.component.html',
  styleUrls: ['./add-user-response.component.css']
})
export class AddUserResponseComponent implements OnInit {
  obj:any;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getObj();
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
