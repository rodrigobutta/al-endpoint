import { Component, OnInit } from '@angular/core';
import {UsersService} from "./shared/users.service";
import {User} from "./shared/user";

declare var swal: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: User[] = [];

  constructor(private usersService: UsersService) { }

    ngOnInit() {
        this.usersService.getUsers()
            .subscribe(data => this.users = data as User[]);
            // .subscribe(data => data);
    }

    deleteUser(user){

        var that = this;

        swal({
            title: "Borrar a " + user.name + "?",
            text: "No se puede volver atrás",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Si!',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No'
        }).then(function() {

            var index = that.users.indexOf(user);

            that.usersService.deleteUser(user.id)
            .subscribe(
                data => {

                      that.users.splice(index, 1);

                      swal({
                        title: "Borrado",
                        type: 'success',
                        showCancelButton: false,
                        timer: 1500
                      });

                },
                err => {

                    swal({
                        title: "Error al borrar",
                        type: 'error',
                        showCancelButton: false
                    });

                }
            );

        })

    }


}
