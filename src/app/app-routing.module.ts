import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RollsroyceComponent } from './brands/rollsroyce/rollsroyce.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [ 
  // {path: '', component:RollsroyceComponent},
{path:'',component:HomeComponent},
{path: 'register', component : RegisterComponent},
{ path: 'Gallery', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) },
  { path: 'brands', loadChildren: () => import('./brands/brands.module').then(m => m.BrandsModule) },
  { path: 'learnMore', loadChildren: () => import('./learn-more/learn-more.module').then(m => m.LearnMoreModule) },
{path:'**',component : PageNotFoundComponent}]
;



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


