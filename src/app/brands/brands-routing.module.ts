import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './brands.component';
import { FerrariComponent } from './ferrari/ferrari.component';
import { JaguarComponent } from './jaguar/jaguar.component';
import { LamborghiniComponent } from './lamborghini/lamborghini.component';
import { RollsroyceComponent } from './rollsroyce/rollsroyce.component';

const routes: Routes = [
  { path: '', component: BrandsComponent },
  { path: 'lamborghini', component: LamborghiniComponent },
  { path: 'ferrari', component: FerrariComponent },
  { path: 'jaguar', component: JaguarComponent },
  { path: 'rollsroyce', component: RollsroyceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandsRoutingModule {}
