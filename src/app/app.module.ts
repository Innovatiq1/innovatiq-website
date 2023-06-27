import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
<<<<<<< HEAD
// import { AlertModule } from 'ngx-bootstrap';
import { CareerComponent } from './components/career/career.component';
import { ContactformComponent } from './contactform/contactform.component';
=======
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
import { ServicesComponent } from './components/services/services.component';
>>>>>>> b2edfb5 (Add services page)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
<<<<<<< HEAD
    
    CareerComponent,
          ContactformComponent
=======
    CareerComponent,
          ContactformComponent,
          ServicesComponent,
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
            DecorationsComponent
>>>>>>> b2edfb5 (Add services page)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
