import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  { path: 'invoice', component: InvoiceComponent },
  { path: '',   redirectTo: '/invoice', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
