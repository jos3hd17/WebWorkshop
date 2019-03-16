import { Component, OnInit, Inject } from '@angular/core';
import { PaymentsService } from '../services/payments.service';

@Component({
  selector: 'app-paymenrts-list',
  templateUrl: './paymenrts-list.component.html',
  styleUrls: ['./paymenrts-list.component.css']
})
export class PaymenrtsListComponent implements OnInit {
  payments = [];
  constructor(private service: PaymentsService) {
   }

  ngOnInit() {
    this.service.getPaymentsList().subscribe( response => {
      this.payments = response;
    });
  }

}
