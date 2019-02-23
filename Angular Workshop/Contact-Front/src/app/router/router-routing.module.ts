import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContactComponent } from '../contact/create-contact/create-contact.component';
import { ContactListComponent } from '../contact/contact-list/contact-list.component';
import { ContactDetailComponent } from '../contact/contact-detail/contact-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent
  },
  {
    path: 'create',
    component: CreateContactComponent
  },
  {
    path: 'detail',
    component: ContactDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
