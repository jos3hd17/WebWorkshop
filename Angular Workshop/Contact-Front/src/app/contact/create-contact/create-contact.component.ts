import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { CreateContactService } from './create-contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
  providers: [CreateContactService]
})
export class CreateContactComponent implements OnInit {
  fullForm = true;
  contact: Contact = new Contact;
  constructor(private service: CreateContactService, private router: Router) { }

  ngOnInit() {
  }

  onSave(): void {
    this.service.setContact(this.contact).subscribe(t => {
        console.log('Saved');
        this.router.navigate(['']);
      });
  }

  validate(): void {
    console.log("sdfghjkl");
    this.fullForm = false;
  }

}
