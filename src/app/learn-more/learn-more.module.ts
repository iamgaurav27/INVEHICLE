import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnMoreRoutingModule } from './learn-more-routing.module';
import { LearnMoreComponent } from './learn-more.component';
import { FerrariComponent } from './ferrari/ferrari.component';
import { RollsroyceComponent } from './rollsroyce/rollsroyce.component';
import { JaguarComponent } from './jaguar/jaguar.component';
import { LamborghiniComponent } from './lamborghini/lamborghini.component';


@NgModule({
  declarations: [
    LearnMoreComponent,
    FerrariComponent,
    RollsroyceComponent,
    JaguarComponent,
    LamborghiniComponent
  ],
  imports: [
    CommonModule,
    LearnMoreRoutingModule
  ]
})
export class LearnMoreModule { }
