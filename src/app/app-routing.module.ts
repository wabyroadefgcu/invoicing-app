import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'invoice', component: InvoiceComponent },
  { path: '', component: HomeComponent }
//  { path: '',   redirectTo: '/invoice', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
