import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  contact$: Observable<any>;

  url = 'http://localhost:3000/api/Contactos';
  constructor(private http: HttpClient) {
  }

  getContactList(): Observable<Contact> {
    return this.http.get<Contact>( this.url );
  }

  getContact(): Observable<any> {
    console.log(this.contact$);
    return this.contact$;
  }

  setContact(contact) {
    this.contact$ = new Observable<any>(observer => observer.next(contact));
  }
}
