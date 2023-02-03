import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FerrariComponent } from './ferrari/ferrari.component';
import { JaguarComponent } from './jaguar/jaguar.component';
import { LamborghiniComponent } from './lamborghini/lamborghini.component';
import { LearnMoreComponent } from './learn-more.component';
import { RollsroyceComponent } from './rollsroyce/rollsroyce.component';

const routes: Routes = [{ path: '', component: LearnMoreComponent },
{path:'ferrari', component:FerrariComponent},
{path:'rollsroyce', component:RollsroyceComponent},
{path:'lamborghini', component:LamborghiniComponent},
{path:'jaguar', component:JaguarComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnMoreRoutingModule { }
