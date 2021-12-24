import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(protected http: HttpService) { }

  public filerProducts(type: any, color: any, size: any): Observable<any>{
    var pathType = 
    console.log(environment.endpoint + "/products?" + ((type != undefined )?'&type=' + type : '')  + ((color != undefined )?'&color=' + color : '') + ((size != undefined )?'&size=' + size : ''));

    return this.http.doGet<any>(environment.endpoint + "/products?" + ((type != undefined )?'&type=' + type : '')  + ((color != undefined )?'&color=' + color : '') + ((size != undefined )?'&size=' + size : ''), this.http.optsName('auth'))
  }
}
