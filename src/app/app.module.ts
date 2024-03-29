import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoryComponent } from './home/category/category.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { LoginPageComponent } from './user/user-login/login-page/login-page.component';
import { LoginModuleComponent } from './user/user-login/login-module/login-module.component';
import { GoodsListComponent } from './goods/goods-list/goods-list.component';
import { GoodsDetailComponent } from './goods/goods-detail/goods-detail.component';
import { SearchComplexComponent } from './home/search/search-complex/search-complex.component';
import { SearchSimpleComponent } from './home/search/search-simple/search-simple.component';
import { HomeBodyComponent } from './home/home-body/home-body.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    LoginPageComponent,
    LoginModuleComponent,
    GoodsListComponent,
    GoodsDetailComponent,
    SearchComplexComponent,
    SearchSimpleComponent,
    HomeBodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
