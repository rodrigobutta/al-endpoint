import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items.component';
import {ItemFormComponent} from "./item-form/item-form.component";

const itemsRoutes: Routes = [
  { path: 'items', component: ItemsComponent, pathMatch: 'full' },
  { path: 'items/new', component: ItemFormComponent},
  { path: 'items/:id', component: ItemFormComponent}
];

export const itemsRouting = RouterModule.forChild(itemsRoutes);
