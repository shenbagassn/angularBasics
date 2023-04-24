import { log } from "console"
import { Component } from '@angular/core';
import { ProductService } from "../products.service";

@Component({
    selector: 'app-addproducts',
    templateUrl: './addproducts.component.html',
    styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent {
    PdtStatus: string = "Not yet created";
    isCreate: boolean = false;
   pdtName:string='ACER';
   pdtName2:string='';
   addpdt:string='';
//pdtser1= new ProductService();

    constructor(public pdtser1:ProductService) {
        console.log("Addproducts compoenent instance created");
        setTimeout(()=>{
            this.isCreate= true;
            console.log("timeout");
            
        },3000)
    }
    createProduct(pdtname:string) {
        this.PdtStatus = "Product created as" + " "+pdtname ;
    }
    createProduct2(event:any){
        console.log(event);
        
        this.PdtStatus= "Product created as" + event.target.value;
    }
    createProduct3(){
        this.PdtStatus= "Product created as" +this.pdtName2;
    }
    changeStatus(){
        this.pdtser1.changeStatusService();
    }
    addProducts(newPdt:string){
        this.pdtser1.serviceAddProduct(newPdt)
    }
}