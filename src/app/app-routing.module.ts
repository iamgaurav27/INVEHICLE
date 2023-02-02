import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FerrariComponent } from './gallery/ferrari/ferrari.component';




const routes: Routes = [{ path: 'Gallery', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) },
                        {path : '', component : FerrariComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

