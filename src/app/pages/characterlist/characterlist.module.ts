import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CharacterlistRoutingModule } from './characterlist-routing.module';
import { CharacterlistComponent } from './characterlist.component';
import { CharacterModule } from '../character/character.module';

@NgModule({
  declarations: [CharacterlistComponent],
  imports: [CommonModule, CharacterlistRoutingModule, NgxPaginationModule, CharacterModule],
  exports: [CharacterlistComponent],
})
export class CharacterlistModule {}
