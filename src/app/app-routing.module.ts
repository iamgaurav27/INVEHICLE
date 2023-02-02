
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RollsroyceComponent } from './brands/rollsroyce/rollsroyce.component';
const routes: Routes = [ {path: '', component:RollsroyceComponent},
  { path: 'brands', loadChildren: () => import('./brands/brands.module').then(m => m.BrandsModule) },
  { path: 'learnMore', loadChildren: () => import('./learn-more/learn-more.module').then(m => m.LearnMoreModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

