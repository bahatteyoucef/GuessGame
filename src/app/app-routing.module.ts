import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomeComponent } from './randome/randome.component';

const routes: Routes = [
  {path:'' ,redirectTo:'Randome',pathMatch:'full'},
  {path:'Randome' ,component:RandomeComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
