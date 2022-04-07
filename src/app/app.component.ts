import { Component } from '@angular/core';
import { NetlifyIdentityService } from './netlify-identity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invoicing';
  constructor(public ns: NetlifyIdentityService) { }
}
