import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sesionActiva: any;
  nameUser: any;
  constructor(protected router: Router) { }
  readLocalStorageValue(key: any) {
    return localStorage.getItem(key) != null;
  }
  ngOnInit(): void {
    this.sesionActiva = this.readLocalStorageValue('name');
    this.nameUser = localStorage.getItem('name');
  }
  async goLogin(){
    await this.router.navigate(['/user/login']);
    window.location.reload();
  }
  async logOut() {
    localStorage.clear();
    await this.router.navigate(["/user/login"]);
    window.location.reload();
  }

  async goHome(){
    await this.router.navigate(['']);
    window.location.reload();
  }

}
