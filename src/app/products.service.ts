import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class ProductService{
    accountStatus="Inactive";
    constructor(){
        console.log("product service instance created");
        
    }
    changeStatusService(){
        this.accountStatus= this.accountStatus=="Inactive"?"Active":"Inactive";
    }
    
}