import { Injectable } from '@angular/core';
import cartitemsData from 'cartitems.json';
import { IProduct } from './interfaces/product';  


@Injectable({
  providedIn: 'root'
})
export class SortbyService {

  public sortItem: number =1; 

}
