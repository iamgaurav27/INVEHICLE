
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RollsroyceComponent } from './brands/rollsroyce/rollsroyce.component';
const routes: Routes = [ {path: '', component:RollsroyceComponent},
  { path: 'brands', loadChildren: () => import('./brands/brands.module').then(m => m.BrandsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

