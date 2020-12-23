import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddContentPageRoutingModule } from './add-content-routing.module';

import { AddContentPage } from './add-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddContentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddContentPage]
})
export class AddContentPageModule {}
