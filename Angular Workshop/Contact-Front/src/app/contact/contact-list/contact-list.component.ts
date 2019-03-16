import { Component, OnInit } from '@angular/core';
import { ContactListService } from './contact-list.service';
import { Contact } from '../models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactListService]
})
export class ContactListComponent implements OnInit {
  contactList: Contact;
  contacto = false;

  constructor(private service: ContactListService, private router: Router) { }

  ngOnInit() {
    this.service.getContactList().subscribe( response => {
      this.contactList = response;
    });
  }

  sendDetail(contacto): void {
    this.contacto = true;
    this.service.setContact(contacto);
    this.router.navigate(['/contact/detail']);
  }

}
