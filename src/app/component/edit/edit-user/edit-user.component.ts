import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ServiceService } from '../../../Services/service.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;
  arrayForm: any =[];
  constructor(
    private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.validatorForm();
  }
  validatorForm(){
    this.editUserForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidoPat: ['', Validators.required],
      apellidoMat: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      fechaNaci: ['', Validators.required],
      fechaIngre: ['', Validators.required],
    });
  }
  editUsersForm(){
    const id = this.route.snapshot.paramMap.get('id');
    this.serviceService.edittUser(id,this.editUserForm.value).subscribe( response => {
     this.nextPage(response);
    });
    this.editUserForm.reset();
  }
  nextPage(response){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          datos: JSON.stringify(response),
      }
    };
    this.router.navigate(['/editusersResponse'], navigationExtras);
  }

}
