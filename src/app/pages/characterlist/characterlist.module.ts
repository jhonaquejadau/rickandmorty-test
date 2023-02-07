import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterlistRoutingModule } from './characterlist-routing.module';
import { CharacterlistComponent } from './characterlist.component';


@NgModule({
  declarations: [
    CharacterlistComponent
  ],
  imports: [
    CommonModule,
    CharacterlistRoutingModule
  ]
})
export class CharacterlistModule { }
