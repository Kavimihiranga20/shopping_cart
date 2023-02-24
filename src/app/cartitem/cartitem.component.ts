import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import cartitemsData from '../cartitems.json';
import { SearchInputService } from 'src/app/search-input.service';
import { ViewService } from '../view.service';
import { SearchComponent } from '../leftsiide/search/search.component';
import { SortbyService } from '../sortby.service';


@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})

export class CartitemComponent implements OnInit {
  
  
  items: IProduct[] = cartitemsData;
  nviewValue:number = this.vservice.viewItem;

  constructor(
    public service: SearchInputService,
    public vservice : ViewService,
    public stserive : SortbyService
    ){}

  ngOnInit() {
  }

  sort(event: any) {
    switch (event.target.value) {
      case "Low": {
          this.items = this.items.sort((low, high) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.items = this.items.sort((low, high) => high.price - low.price);
          break;
        }

      case "Name":
        {
          this.items = this.items.sort(function (low, high) {
            if (low.name < high.name) {
              return -1;
            }
            else if (low.name > high.name) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }

      default: {
        this.items = this.items.sort((low, high) => low.price - high.price);
        break;
      }

    }
    return this.items;

  }

  }
