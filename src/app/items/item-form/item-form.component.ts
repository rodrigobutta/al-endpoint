import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Item } from '../shared/item';
import { ItemsService } from '../shared/items.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  id: number;
  item: Item = new Item();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private itemsService: ItemsService
  ) {
    this.form = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      email: ['', [
        Validators.required,
        BasicValidators.email
        //Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      phone: [],
      address: formBuilder.group({
        street: ['', Validators.minLength(3)],
        suite: [],
        city: ['', Validators.maxLength(30)],
        zipcode: ['', Validators.pattern('^([0-9]){5}([-])([0-9]){4}$')]
      })
    });
  }

  ngOnInit() {

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.id = id;

      this.title = id ? 'Edit Item' : 'New Item';

      if (!id)
        return;

      this.itemsService.getItem(id)
        .subscribe(
          // item => item,
          item => this.item = item as Item,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });

  }

  save() {
    var result,
        itemValue = this.form.value;

    console.log(this.id);

    if (this.id){
        itemValue.id = this.id;
        result = this.itemsService.updateItem(itemValue);
    } else {
        result = this.itemsService.addItem(itemValue);
    }

    result.subscribe(data => this.router.navigate(['items']));
  }
}
