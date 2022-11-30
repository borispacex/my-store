import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { TestComponent } from './components/test/test.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { VowelToNumberPipe } from './pipes/vowel-to-number.pipe';
import { HighLightDirective } from './directives/high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    TestComponent,
    ProductsComponent,
    ProductComponent,
    NavComponent,
    ReversePipe,
    TimeAgoPipe,
    VowelToNumberPipe,
    HighLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
