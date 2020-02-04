import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimiesPage } from './animies.page';

const routes: Routes = [
  {
    path: '',
    component: AnimiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimiesPageRoutingModule {}
