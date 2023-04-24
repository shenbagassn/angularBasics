import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddproductsComponent } from './addProducts/addProducts.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { DefaultpipesComponent } from './Pipes/defaultpipes/defaultpipes.component';
import { SummaryCustomPipe } from './Pipes/summary-custom.pipe';
import { CustomfilterPipe } from './Pipes/customfilter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AddproductsComponent,
    ListproductsComponent,
    DefaultpipesComponent,
    SummaryCustomPipe,
    CustomfilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
