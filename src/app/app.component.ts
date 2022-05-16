import { Component, OnInit } from '@angular/core';
import { NetlifyIdentityService } from './netlify-identity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'invoicing';

  constructor(public ns: NetlifyIdentityService) { }

  ngOnInit(): void {
    // if (this.ns.checkUser()) {
    //   console.log("logged in, populating userEmail");
    //   this.ns.populateUserData();
    // }
    console.log(`isAdmin: ${this.ns.isAdmin}`);
    console.log(`loggedIn: ${this.ns.loggedIn}`);
    console.log(`userEmail: ${this.ns.userEmail}`);

    console.log("1")
    console.log(this.ns)
    console.log("2")
    console.log(this.ns.get())
//     console.log("3")
//     console.log(this.us)
// //    console.log(ns.get().currentUser())
//     console.log("4")
//     console.log(this.us.getWhatever())
// //    console.log(ns.get().currentUser().email)
//     console.log("5")
//     console.log(this.us.getWhatever2())
// //    console.log(this.ns.getUser())
//     console.log("6")
//     console.log(this.us.someValue)
//     console.log("7")
//     console.log(this.ns.checkUser())
//     if (this.ns.get().currentUser() != null) {
//       var thisUser = this.ns.get().currentUser();

//       console.log(thisUser);
//       console.log(thisUser.app_metadata);

// //      console.log(thisUser.app_metadata.roles);
//       var theseRoles: string[] = thisUser.app_metadata.roles;
//       console.log(theseRoles);
//       theseRoles.forEach((element) => {
//         console.log(element);
//       });

//       var isAdmin = theseRoles.indexOf("Administrator");
//       console.log("isAdmin: ");
//       console.log(isAdmin);

//       var isAdmin2 = theseRoles.find((value) => {
//         return value === "Administrator"
//       })
//       console.log("isAdmin2: ");
//       console.log(isAdmin2);

//       var isAdmin3 = theseRoles.includes("Administrator");
//       console.log("isAdmin3: ");
//       console.log(isAdmin3);
//       // this.ns.get().currentUser().app_metadata.roles.array.foreach((element: any) => {
//       //   console.log(element);
//       // });
//     }


//    console.log(this.ns.getUserStatus())
    // ns.get().currentUser() 
    // ns.get().currentUser().email

  }
}
