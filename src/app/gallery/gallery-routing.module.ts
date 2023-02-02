import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FerrariComponent } from './ferrari/ferrari.component';
import { GalleryComponent } from './gallery.component';
import { JaguarComponent } from './jaguar/jaguar.component';
import { LamborghiniComponent } from './lamborghini/lamborghini.component';
import { RollesRoyceComponent } from './rolles-royce/rolles-royce.component';

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'ferrari', component: FerrariComponent },
  { path: 'lamborghini', component: LamborghiniComponent },
  { path: 'jaguar', component: JaguarComponent },
  { path: 'rollesroyce', component: RollesRoyceComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }


