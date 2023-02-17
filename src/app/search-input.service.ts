import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchInputService {
  public searchText: string = '';
}
