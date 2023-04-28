import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddproductsComponent } from './addProducts/addProducts.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { DefaultpipesComponent } from './Pipes/defaultpipes/defaultpipes.component';
import { SummaryCustomPipe } from './Pipes/summary-custom.pipe';
import { CustomfilterPipe } from './Pipes/customfilter.pipe';
import { CustomdirectiveComponent } from './myowndirectives/customdirective/customdirective.component';
import { HighlightDirective } from './myowndirectives/highlight.directive';
import { InputformatDirective } from './myowndirectives/inputformat.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TdformComponent } from './Forms/tdform/tdform.component';



@NgModule({
  declarations: [
    AppComponent,
    AddproductsComponent,
    ListproductsComponent,
    DefaultpipesComponent,
    SummaryCustomPipe,
    CustomfilterPipe,
    CustomdirectiveComponent,
    HighlightDirective,
    InputformatDirective,
    LifecycleComponent,
    TdformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
