import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
// import { ServiceComponent } from './components/service/service.component';
import { AboutComponent } from './components/about/about.component';
import { CareerComponent } from './components/career/career.component';
// import { ServicesComponent } from './components/services/services.component';
import { ContactformComponent } from './contactform/contactform.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ItInfraComponent } from './components/service/it-infra/it-infra.component';
import { CyberSecurityComponent } from './components/service/cyber-security/cyber-security.component';
import { BusinessAppDevComponent } from './components/service/business-app-dev/business-app-dev.component';
import { ConsultingServicesComponent } from './components/service/consulting-services/consulting-services.component';
import { DigitalTransComponent } from './components/service/digital-trans/digital-trans.component';
import { CloudServiceComponent } from './components/service/cloud-service/cloud-service.component';


const routes: Routes = [
  // {
  //   path:'',
  //   component:HomeComponent,

  // },
  // {
  //   path:'',
  //   component:ServicesComponent,

  // },
  {
    path:'',
    component:ServiceComponent,

  },
  {
    path:'service',
    component:ServiceComponent,

  },
  {
    path:'industries',
    component:IndustriesComponent,

  },
  {
    path:'about',
    component:AboutComponent,

  },
  {
    path:'career',
    component:CareerComponent,

  },
  {
    path:'it-infra',
    component:ItInfraComponent,

  },
  {
    path:'cyber-security',
    component:CyberSecurityComponent,

  },
  {
    path:'business-app',
    component:BusinessAppDevComponent,

  },
  {
    path:'consulting-services',
    component:ConsultingServicesComponent,

  },
  {
    path:'digital-trans',
    component:DigitalTransComponent,

  },
  {
    path:'cloud-service',
    component:CloudServiceComponent,

  },
  {
    path:'contact',
    component:ContactformComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
