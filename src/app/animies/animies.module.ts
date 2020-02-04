import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimiesPageRoutingModule } from './animies-routing.module';

import { AnimiesPage } from './animies.page';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuModule,
    AnimiesPageRoutingModule
  ],
  declarations: [AnimiesPage]
})
export class AnimiesPageModule {}
