import { Component, OnInit } from '@angular/core';
import { CatalogService } from './service/catalog.service'
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(protected catalogService : CatalogService) { }
  

	cards: any;
  products: any = [[]];
  type: any;
  size: any;
  color: any;

  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  filterProducts(event: any, option: string){
    switch(option){
      case "0":
        this.type = event.target.value;
        break;
      case "1":
        this.color = event.target.value;
        break;
      case "2":
        this.size = event.target.value;
        break;
    }
    this.catalogService.filerProducts(this.type, this.color, this.size).subscribe(
      value =>{
        console.log(value);
        this.cards = value;
        this.products = this.chunk(this.cards, 4);
      },
      error =>{
        console.log(error);
        
      } )
  }
  ngOnInit(): void {
    this.catalogService.filerProducts(this.type, this.color, this.size).subscribe(
      value =>{
        console.log(value);
        this.cards = value;
        this.products = this.chunk(this.cards, 4);
        
      },
      error =>{
        console.log(error);
        
      } )
    console.log(this.cards);

  }

}
