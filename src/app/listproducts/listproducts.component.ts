import { Component, Input, OnInit } from '@angular/core';
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


 @Input() mypadata1:string='';// Default Method
 @Input('mypadata2') padata2:string="";//Alias Method

 mypaNewData3:string="";
 @Input() set mypadata3(val:string){ 
  this.mypaNewData3=val.toUpperCase();
 }

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
