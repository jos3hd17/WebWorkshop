import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymenrtsListComponent } from './paymenrts-list/paymenrts-list.component';
import { PaymenrtsAddComponent } from './paymenrts-add/paymenrts-add.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentsService } from './services/payments.service';
import { GenericModule } from '../generic/generic.module';

@NgModule({
  declarations: [PaymenrtsListComponent, PaymenrtsAddComponent],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    HttpClientModule,
    GenericModule
  ],
  providers: [
    PaymentsService
  ]
})
export class PaymentsModule { }
