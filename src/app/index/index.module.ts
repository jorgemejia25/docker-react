import { CommonModule } from '@angular/common';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { CountdownComponent } from './countdown/countdown.component';
import { FormsModule } from '@angular/forms';
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
import { ImagesTwoComponent } from './images-two/images-two.component';

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
    ConfirmarComponent,
    ImagesTwoComponent,
  ],
  imports: [CommonModule, FormsModule, IndexRoutingModule, PrimeModule],
})
export class IndexModule {}
