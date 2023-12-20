import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { ServicesHeaderComponent } from './components/services/services-header/services-header.component';
import { PartOneComponent } from './components/services/part-one/part-one.component';
import { SearchButtonComponent } from './components/services/part-one/search-button/search-button.component';
import { MainImageComponent } from './components/services/part-one/main-image/main-image.component';
import { PartTwoComponent } from './components/services/part-two/part-two.component';
import { PartThreeComponent } from './components/services/part-three/part-three.component';
import { PartFourComponent } from './components/services/part-four/part-four.component';
import { ImgCardsComponent } from './components/services/part-four/img-cards/img-cards.component';
import { PartFiveComponent } from './components/services/part-five/part-five.component';
import { PartSixComponent } from './components/services/part-six/part-six.component';
import { DecorationsComponent } from './components/services/decorations/decorations.component';
// import { AlertModule } from 'ngx-bootstrap';
import { CareerComponent } from './components/career/career.component';
import { ContactformComponent } from './contactform/contactform.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    CareerComponent,
          ContactformComponent,
          AboutComponent,
          ServicesHeaderComponent,
          PartOneComponent,
          SearchButtonComponent,
          MainImageComponent,
          PartTwoComponent,
          PartThreeComponent,
          PartFourComponent,
          ImgCardsComponent,
          PartFiveComponent,
          PartSixComponent,
          DecorationsComponent,
          ServicesComponent,
          IndustriesComponent,
          ItInfraComponent,
          CyberSecurityComponent,
          BusinessAppDevComponent,
          ConsultingServicesComponent,
          DigitalTransComponent,
          CloudServiceComponent,
          ManufacturingComponent,
          HealthcareComponent,
          RetailComponent,
          EducationComponent,
          BfsiComponent,
          LmsComponent,
          TmsComponent,
          VisionMissionComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    // AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
