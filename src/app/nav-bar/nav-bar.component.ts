import { Component, OnInit } from '@angular/core';


import { User } from '../_models/index';
import { AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    currentUser: User;

    constructor(private auth: AuthenticationService) {
        this.currentUser = auth.getCurrentUser();
    }


    ngOnInit() {
    }

}
