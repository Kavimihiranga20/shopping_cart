import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-leftsiide',
  templateUrl: './leftsiide.component.html',
  styleUrls: ['./leftsiide.component.css']
})
export class LeftsiideComponent {
  showme:boolean = false
  showFilters(){
   
    this.showme = !this.showme;
  }
  
  ngOnInit(){
  }

  ngAfterViewInit(){
    if(window.innerWidth > 768){
      this.showme = true;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.showme = (window.innerWidth > 768)
  }

}
