import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddproductsComponent } from './addProducts/addProducts.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { DefaultpipesComponent } from './Pipes/defaultpipes/defaultpipes.component';



@NgModule({
  declarations: [
    AppComponent,
    AddproductsComponent,
    ListproductsComponent,
    DefaultpipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
