import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class ProductService{
    accountStatus="Inactive";
    serviceProductList:string[]=["sony","HP","samsung","Dell"];
    constructor(){
        console.log("product service instance created");
        
    }
    changeStatusService(){
        this.accountStatus= this.accountStatus=="Inactive"?"Active":"Inactive";
    }
    /*getProductListArray(){
        return this.serviceProductList;
    }*/
    serviceAddProduct(newPdt:string){
this.serviceProductList.push(newPdt);
    }
}