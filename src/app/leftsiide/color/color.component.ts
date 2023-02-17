import { Component } from '@angular/core';
import colordata from '../color.json'
import { Color } from '../color'
import { SearchInputService } from 'src/app/search-input.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {

  constructor(
    public service: SearchInputService
  ) { }

  colors: Color[] = colordata;

  colorfilter(cvalue: any) {
    this.service.searchText = cvalue;
  }

}
