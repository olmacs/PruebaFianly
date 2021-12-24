import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(protected loginService: LoginService, private router: Router) { }
  
  error: any;
  loginForm: any;

  ngOnInit(): void {
    this.constructForm();
  }
  runAuth() {
    if (this.loginForm.valid) {

      this.loginService.auth(this.loginForm.value).subscribe(
        async (value) => {
          
          console.log(value);
          localStorage.setItem('token', value['token']);
          localStorage.setItem('username', value['Username']);
          localStorage.setItem('id', value['id']);

          //await this.router.navigate([".."]);
          //window.location.reload();
        }, (error) => {
          console.log(error);
          
          this.alertInvalid();
          this.error = error;
        }
      )
    }
  }
  private constructForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }
  alertInvalid() {
    Swal.fire({
      title: 'Error!',
      text: 'contraseña o usuario incorrectos',
      icon: 'error',
      confirmButtonText: 'Continue'
    })

  }
}