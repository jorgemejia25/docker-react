import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeModule } from '../prime/prime.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminRoutingModule, PrimeModule, ReactiveFormsModule],
})
export class AdminModule {}
