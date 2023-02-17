import { Component } from '@angular/core';
import { View } from './view'
import viewdata from './view.json'
import { ViewService } from '../view.service'
import { Sortby } from './sortby';
import Sortbydata from './sortby.json';
import { SortbyService } from '../sortby.service';
import ItemData from 'cartitems.json'

@Component({
  selector: 'app-itemfilter',
  templateUrl: './itemfilter.component.html',
  styleUrls: ['./itemfilter.component.css']
})
export class ItemfilterComponent {

  constructor(
    public vservice: ViewService,
    public stservice: SortbyService
  ) { }

  Views: View[] = viewdata

  sortby: Sortby[] = Sortbydata

  viewSelect(viewvalue: string) {
    let nviewvalue = parseInt(viewvalue);
    this.vservice.viewItem = nviewvalue;
  }

  sort(value: number) {
    console.log(value);
    this.stservice.sortItem = value;

  }

  ngOnInit() {

  }

}
