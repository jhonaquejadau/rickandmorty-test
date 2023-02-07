import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterlistComponent } from './characterlist.component';

const routes: Routes = [{ path: '', component: CharacterlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterlistRoutingModule { }
