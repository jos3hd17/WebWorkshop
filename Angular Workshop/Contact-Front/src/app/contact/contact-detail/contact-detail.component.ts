import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactListService } from '../contact-list/contact-list.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact = new Contact();
  constructor(@Inject(ContactListService) service) {
    service.getContact().subscribe(
      response => {
        this.contact = response;
        console.log(response);
      }
    );
   }
   ngOnInit() {}

}
