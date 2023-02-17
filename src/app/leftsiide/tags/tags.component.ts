import { Component } from '@angular/core';
import { Tags } from '../tags'
import tagdata from '../tags.json'
import { SearchInputService } from 'src/app/search-input.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  constructor(
    public service: SearchInputService
  ) { }

  tags: Tags[] = tagdata;

  tagfilter(tagvalue: any) {
    this.service.searchText = tagvalue
  }

}
