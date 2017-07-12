import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isSideNavOpen: boolean
  constructor() {
    this.isSideNavOpen = false;
  }

  sideNavAction() {
    if (this.isSideNavOpen) {
      //Closing SideNav
      document.getElementById("mySidenav").style.width = "64px";
      document.getElementById("main").style.marginLeft = "64px";
      document.getElementById("main").style.transition = "margin-left .5s";
      document.getElementById("main").style.padding = "0px";
      this.isSideNavOpen = false
    } else {
      //Opening SideNav
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("mySidenav").style.textAlign = "right";
      this.isSideNavOpen = true;
    }
  }
}
