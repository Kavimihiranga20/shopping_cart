import { Component } from '@angular/core';
import { CartitemComponent } from 'src/app/cartitem/cartitem.component';
import { SearchInputService } from 'src/app/search-input.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(

    public service: SearchInputService
    
  ){} 
}
