import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Login } from '../model/login';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(protected http: HttpService) { }
  
  public auth(login: Login): Observable<any>{
    console.log(environment.endpoint + '/users?email=' + login.email + "&password=" + login.password);
    
    return this.http.doGet<any>(environment.endpoint + '/users?email=' + login.email + "&password=" + login.password, this.http.optsName('auth'))
  }
}
