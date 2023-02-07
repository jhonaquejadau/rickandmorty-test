import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharacterlistRoutingModule } from './characterlist-routing.module';
import { CharacterlistComponent } from './characterlist.component';



@NgModule({
  declarations: [CharacterlistComponent],
  imports: [CommonModule, CharacterlistRoutingModule],
  exports:[CharacterlistComponent]
})
export class CharacterlistModule {}
