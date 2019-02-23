import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class CreateContactService {
  url = 'http://localhost:3000/api/Contactos';
  constructor(private http: HttpClient) {
  }

  setContact(contacto: Contact): Observable<Contact> {
    const contact = {
      firstname: contacto.firstname,
      secondname: contacto.secondname,
      lastname: contacto.lastname,
      email: contacto.email,
      phone: contacto.phone,
      birthdate: contacto.birthdate,
      profession: contacto.profession
    }
    return this.http.post<Contact>( this.url, contact );
  }
}
