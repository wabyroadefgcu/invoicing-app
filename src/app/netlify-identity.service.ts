import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

declare var netlifyIdentity: any;

@Injectable({
  providedIn: 'root'
})

export class NetlifyIdentityService {

  userEmail: string = "";
  loggedIn: boolean = false;
  isAdmin = this.runOnCheck();

  private runOnCheck(): boolean {
    if (netlifyIdentity.currentUser()) {
      this.userEmail = netlifyIdentity.currentUser().email;
      return true;
    }
    return false;
  }

  constructor(router: Router) {
    netlifyIdentity.init();
    // Bind to events
    netlifyIdentity.on('init', function(user: any) {
      console.log('init', user)
    });

    netlifyIdentity.on('login', (user: any) => {   
      console.log('current user', netlifyIdentity.currentUser());
      this.userEmail = netlifyIdentity.currentUser().email;
      console.log('current user alt', user);
      netlifyIdentity.close();
    });

    netlifyIdentity.on('logout', function() {
      console.log('Logged out'); 
      netlifyIdentity.close();
      router.navigateByUrl('/');
    });

    netlifyIdentity.on('error', function(err: any) {
      console.error('Error', err)
    }); 

    netlifyIdentity.on('open', function() {
      console.log('Widget opened')
    });

    netlifyIdentity.on('close', function() {
      console.log('Widget closed');
    });

    let initialUser = netlifyIdentity.currentUser();
    if (initialUser) {
      this.userEmail = initialUser.email;
      this.loggedIn = true;
    }

  }
  
  get(): any {
      return netlifyIdentity;
  }

  checkUser(): boolean {
    var tempValue = netlifyIdentity.currentUser();
    if (tempValue !== null) {
      return true;
    }
    return false;
  }

  populateUserData(): void {
    if (netlifyIdentity.currentUser()) {
      this.userEmail = netlifyIdentity.currentUser().email;
    }
  }
}
