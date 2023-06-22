import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    
  },
  {
    path:'service',
    component:ServiceComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
