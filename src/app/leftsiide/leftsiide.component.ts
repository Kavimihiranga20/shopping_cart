import { Component, ElementRef, HostListener } from '@angular/core';

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
  
   closeNav(){
    let sidebar = document.querySelector('#mySiderbar');
    if(sidebar?.classList.contains('show-siderbar')){
      sidebar.classList.remove('show-siderbar');
    }
  }

  openNav(){
    document.querySelector('#mySiderbar')?.classList.add('show-siderbar');
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
