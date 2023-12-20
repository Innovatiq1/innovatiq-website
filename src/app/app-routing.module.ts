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
import { ManufacturingComponent } from './components/industries/manufacturing/manufacturing.component';
import { HealthcareComponent } from './components/industries/healthcare/healthcare.component';
import { RetailComponent } from './components/industries/retail/retail.component';
import { EducationComponent } from './components/industries/education/education.component';
import { BfsiComponent } from './components/industries/bfsi/bfsi.component';
import { LmsComponent } from './components/products/lms/lms.component';
import { TmsComponent } from './components/products/tms/tms.component';
import { VisionMissionComponent } from './components/about/vision-mission/vision-mission.component';


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
  {
    path:'manufacturing',
    component:ManufacturingComponent,

  },
  {
    path:'healthcare',
    component:HealthcareComponent,

  },
  {
    path:'retail',
    component:RetailComponent,

  },
  {
    path:'education',
    component:EducationComponent,

  },
  {
    path:'bfsi',
    component:BfsiComponent,

  },
  {
    path:'lms',
    component:LmsComponent,

  },
  {
    path:'tms',
    component:TmsComponent,

  },
  {
    path:'vision-mission',
    component:VisionMissionComponent,

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
