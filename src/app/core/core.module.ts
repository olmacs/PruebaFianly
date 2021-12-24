import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    NavbarComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [NavbarComponent, CarouselComponent]
})
export class CoreModule { }
