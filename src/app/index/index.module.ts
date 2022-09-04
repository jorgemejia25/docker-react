import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { HeaderComponent } from './header/header.component';
import { ImagesComponent } from './images/images.component';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { IntroComponent } from './intro/intro.component';
import { ItinerarioComponent } from './itinerario/itinerario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { PrimeModule } from '../prime/prime.module';
import { RegalosComponent } from './regalos/regalos.component';

@NgModule({
  declarations: [
    IndexComponent,
    HeaderComponent,
    IntroComponent,
    CountdownComponent,
    ItinerarioComponent,
    ImagesComponent,
    RegalosComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, IndexRoutingModule, PrimeModule],
})
export class IndexModule {}
