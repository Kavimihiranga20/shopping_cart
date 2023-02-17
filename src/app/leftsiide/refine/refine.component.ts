import { Component } from '@angular/core';
import { Router } from '@angular/router';
import refinedata from '../refine.json';
import { SearchInputService } from 'src/app/search-input.service';
import {Refine} from '../refine'


@Component({
  selector: 'app-refine',
  templateUrl: './refine.component.html',
  styleUrls: ['./refine.component.css']
})
export class RefineComponent {

  constructor(
    public service: SearchInputService
  ){}

    refines : Refine[] = refinedata; 

  ngOnInit(){
  }

  refinefilter(rvalue:any){
 
    this.service.searchText = rvalue;
  }
}
