import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { LeftsiideComponent } from './leftsiide/leftsiide.component';
import { ItemfilterComponent } from './itemfilter/itemfilter.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { SearchComponent } from './leftsiide/search/search.component';
import { CategoriesComponent } from './leftsiide/categories/categories.component';
import { PriceComponent } from './leftsiide/price/price.component';
import { RefineComponent } from './leftsiide/refine/refine.component';
import { SizeComponent } from './leftsiide/size/size.component';
import { ColorComponent } from './leftsiide/color/color.component';
import { TagsComponent } from './leftsiide/tags/tags.component';
import { FooterComponent } from './footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { FormsModule } from '@angular/forms';
import { UpperbarComponent } from './upperbar/upperbar.component';
import { ShopComponent } from './pages/shop/shop.component';
import { PagesComponent } from './pages/pages/pages.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
// import { Ng2OrderModule } from 'ng2-order-pipe';
// import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    LeftsiideComponent,
    ItemfilterComponent,
    CartitemComponent,
    SearchComponent,
    CategoriesComponent,
    PriceComponent,
    RefineComponent,
    SizeComponent,
    ColorComponent,
    TagsComponent,
    FooterComponent,
    UpperbarComponent,
    ShopComponent,
    PagesComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [CartitemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
