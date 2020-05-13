import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SinglePageComponent} from "./single-page/single-page.component";
import {SecondPageComponent} from "./second-page/second-page.component";
import {ListItemsComponent} from "./list-items/list-items.component";

const routes: Routes = [
  {
    path: '',
    component: SinglePageComponent,
  },
  {
    path: 'second-page',
    component: SecondPageComponent,
  },
  {
    path: 'list-items',
    component: ListItemsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
