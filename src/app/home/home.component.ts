﻿import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;

    constructor(private auth: AuthenticationService) {
        this.currentUser = auth.getCurrentUser();
    }

    ngOnInit() {

    }



}