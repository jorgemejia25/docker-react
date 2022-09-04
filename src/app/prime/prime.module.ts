import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { PasswordModule } from 'primeng/password';
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
  ],
})
export class PrimeModule {}
