import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact = new Contact();
  constructor() { }

  ngOnInit() {
    this.contact = JSON.parse(sessionStorage.getItem('contacto'));
  }

}
