import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../../Services/service.service'
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  arrayForm: any =[];
  constructor(
    private serviceService: ServiceService,
    private location: Location,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.validatorForm();
  }
  validatorForm(){
    this.addUserForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidoPat: ['', Validators.required],
      apellidoMat: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      fechaNaci: ['', Validators.required],
      fechaIngre: ['', Validators.required],
    });
  }
  addUsersForm(){
    this.serviceService.createtUser(this.addUserForm.value).subscribe( response => {
     this.arrayForm.push(response);
     this.nextPage(response);
    });
    this.addUserForm.reset();
  }
  nextPage(response){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          datos: JSON.stringify(response),
      }
    };
    this.router.navigate(['/addusersResponse'], navigationExtras)
  }

}
