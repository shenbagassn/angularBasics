import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {
productLists:string[]=["sony","HP","samsung","Dell"];
  constructor() { }

  ngOnInit(): void {
  }

}
