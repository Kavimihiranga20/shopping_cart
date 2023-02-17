import { Component } from '@angular/core';
import sizedata from '../size.json'
import {Size} from '../size'
import { SearchInputService } from 'src/app/search-input.service';


@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent {

  sizes: Size[] = sizedata;

  constructor(
    public service: SearchInputService
  ){}

  sizefilter(svalue:any){
    this.service.searchText = svalue;

  }

}
