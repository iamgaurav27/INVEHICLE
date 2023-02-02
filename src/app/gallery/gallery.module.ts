import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { RollesRoyceComponent } from './rolles-royce/rolles-royce.component';
import { LamborghiniComponent } from './lamborghini/lamborghini.component';
import { JaguarComponent } from './jaguar/jaguar.component';
import { FerrariComponent } from './ferrari/ferrari.component';


@NgModule({
  declarations: [
    GalleryComponent,
    RollesRoyceComponent,
    LamborghiniComponent,
    JaguarComponent,
    FerrariComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
