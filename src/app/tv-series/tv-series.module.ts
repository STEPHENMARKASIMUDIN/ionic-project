import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvSeriesPageRoutingModule } from './tv-series-routing.module';

import { TvSeriesPage } from './tv-series.page';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuModule,
    TvSeriesPageRoutingModule
  ],
  declarations: [TvSeriesPage]
})
export class TvSeriesPageModule {}
