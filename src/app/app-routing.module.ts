import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/client/homePage/homepage/homepage.component';

// link ismi verme 
const routes: Routes = [
  {path:'', component:HomepageComponent,}
  //children[{}]
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
