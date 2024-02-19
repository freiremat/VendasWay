import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrivacyPolicyComponent } from './privacyPolicy/privacyPolicy.component';
import { CardTitleComponent } from './components/card-title/card-title.component';

import {AccordionModule} from 'primeng/accordion';
import {MenubarModule} from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { InfoComponent } from './components/info/info.component';
import { CardCustomerComponent } from './components/card-customer/card-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    CardTitleComponent,
    InfoComponent,
    CardCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    AccordionModule,
    MenubarModule,
    RippleModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
