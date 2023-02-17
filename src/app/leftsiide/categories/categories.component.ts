import { Component } from '@angular/core';
import { Categories } from '../Categories';
import categoryData from '../categories.json';
import { SearchInputService } from 'src/app/search-input.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(
    public service: SearchInputService
  ){}

  Categories: Categories[] = categoryData;

  catFilter(catvalue:any){
    this.service.searchText = catvalue;
  }
  
}
