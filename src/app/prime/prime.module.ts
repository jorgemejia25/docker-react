import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PasswordModule,
    TableModule,
    ToastModule,
    RippleModule,
    DialogModule,
    InputNumberModule,
    DropdownModule,
    RatingModule,
    ConfirmPopupModule,
  ],
})
export class PrimeModule {}
