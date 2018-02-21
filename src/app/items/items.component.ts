import { Component, OnInit } from '@angular/core';
import {ItemsService} from "./shared/items.service";
import {Item} from "./shared/item";

declare var swal: any;

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  private items: Item[] = [];

  constructor(private itemsService: ItemsService) { }

    ngOnInit() {

        this.itemsService.getItems()
            .subscribe(data => this.items = data as Item[]);

    }

    deleteItem(item){

        var that = this;

        swal({
            title: "Borrar a " + item.name + "?",
            text: "No se puede volver atrás",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Si!',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No'
        }).then(function() {

            var index = that.items.indexOf(item);

            that.itemsService.deleteItem(item.id)
            .subscribe(
                data => {

                      that.items.splice(index, 1);

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
