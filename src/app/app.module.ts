import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
// import { AlertModule } from 'ngx-bootstrap';
import { CareerComponent } from './components/career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    
    CareerComponent
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
