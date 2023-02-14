import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsPageComponent } from './brands-page/brands-page.component';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // {path: '', component:RollsroyceComponent},
  { path: '', component: HomeComponent },
  {
    path: 'sagar-forms',
    loadChildren: () =>
      import('./sagar-forms/sagar-forms.module').then(
        (m) => m.SagarFormsModule
      ),
  },
  { path: 'brand/:id', component: BrandsPageComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
