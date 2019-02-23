import { Component, OnInit } from '@angular/core';
import { ContactListService } from './contact-list.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactListService]
})
export class ContactListComponent implements OnInit {
  contactList: Contact;
  constructor(private service: ContactListService) { }

  ngOnInit() {
    this.service.getContactList().subscribe( response => {
      this.contactList = response;
    });
  }

}
