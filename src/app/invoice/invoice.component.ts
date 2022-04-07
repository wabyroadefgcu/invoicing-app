import { Component, OnInit } from '@angular/core';
import { NetlifyIdentityService } from '../netlify-identity.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor(public ns: NetlifyIdentityService) { }

  ngOnInit(): void {
  }

}
