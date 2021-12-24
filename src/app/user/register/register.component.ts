import { Component, OnInit } from '@angular/core';
import { RegisterService } from './service/register.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  
  registerForm: any;
  error: any;
  ciudades: any;
  constructor(protected registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.constructForm();
    this.getCities();
  }
  runRegister(){
    if(this.registerForm.valid){
      
      this.registerService.register(this.registerForm.value).subscribe(
        value => {
          console.log(value);
          this.router.navigate(['/user/login'])
        }, error => {
          this.alertInvalid();
          this.error = error;
        }
      )
    }
    else{
      this.alertInvalidData();
    }
  }
  private constructForm(){
    this.registerForm = new FormGroup({
      lastname: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl ('', [Validators.required, Validators.minLength(3), Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      city: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      name: new FormControl ('', [Validators.required, Validators.minLength(3)])

    })
  }
  getCities(){
    this.registerService.getCities().subscribe( (value: any) =>{
      this.ciudades = value;
      console.log(value);
      
    })
  }
  alertInvalid() {
    Swal.fire({
      title: 'Error!',
      text: 'Hubo un error',
      icon: 'error',
      confirmButtonText: 'Continue'
    })

  }
  alertInvalidData() {
    Swal.fire({
      title: 'Error!',
      text: 'Error al ingresar los datos',
      icon: 'error',
      confirmButtonText: 'Continue'
    })

  }

}