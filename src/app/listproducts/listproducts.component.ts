import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {
productLists:string[]=[];
viewmode:string='personal';
srchtxt="";

//pdtser2= new ProductService;//manually create object in normal way
  
constructor(public pdtser2:ProductService) //single ton object
  { 
    this.productLists=pdtser2.serviceProductList;
   // this.productLists=pdtser2.getProductListArray()
  }

  ngOnInit(): void {
  }
  doSwitch(viewCase:string){
    this.viewmode=viewCase;
  }
  doEventFiltering(event:any){
    console.log("event triggered");
    console.log(event);  
  }

}
