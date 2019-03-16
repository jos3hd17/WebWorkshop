import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymenrtsListComponent } from './paymenrts-list/paymenrts-list.component';
import { PaymenrtsAddComponent } from './paymenrts-add/paymenrts-add.component';

const routes: Routes = [
  {
    path: 'list',
    component: PaymenrtsListComponent
  },
  {
    path: '',
    redirectTo: 'list'
  },
  {
    path: 'add',
    component: PaymenrtsAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
