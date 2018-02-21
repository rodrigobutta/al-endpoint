import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { ItemsComponent } from './items.component';
import { ItemsService } from './shared/items.service';
import { ItemFormComponent } from './item-form/item-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    ItemsComponent,
    ItemFormComponent
  ],
  exports: [
    ItemsComponent
  ],
  providers: [
    ItemsService
  ]
})
export class ItemsModule { }
