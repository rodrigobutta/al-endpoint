﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { AlertService, AuthenticationService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';

import { MaterializeModule } from 'angular2-materialize';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { usersRouting } from "./users/users.routing";
import { UsersModule } from "./users/users.module";
// import { HttpClient } from './shared/http-client.service';
import { NotFoundComponent } from './not-found/not-found.component';

import { itemsRouting } from "./items/items.routing";
import { ItemsModule } from "./items/items.module";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MaterializeModule,
        UsersModule,
        usersRouting,

        ItemsModule,
        itemsRouting,

        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        NavBarComponent,
        NotFoundComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        // HttpClient,
        JwtInterceptor

    ],
    bootstrap: [AppComponent]
})

export class AppModule { }