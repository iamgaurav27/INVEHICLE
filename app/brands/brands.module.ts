import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands.component';
import { LamborghiniComponent } from './lamborghini/lamborghini.component';
import { FerrariComponent } from './ferrari/ferrari.component';
import { JaguarComponent } from './jaguar/jaguar.component';
import { RollsroyceComponent } from './rollsroyce/rollsroyce.component';


@NgModule({
  declarations: [
    BrandsComponent,
    LamborghiniComponent,
    FerrariComponent,
    JaguarComponent,
    RollsroyceComponent
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule
  ]
})
export class BrandsModule { }
