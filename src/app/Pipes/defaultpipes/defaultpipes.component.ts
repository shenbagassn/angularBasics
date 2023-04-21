import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaultpipes',
  templateUrl: './defaultpipes.component.html',
  styleUrls: ['./defaultpipes.component.css']
})
export class DefaultpipesComponent implements OnInit {
username:string="SHENBA";
place:string="morrisville";
msg:string="hi im shenba from morrisville";
obj={fname:"shenba",age:30};
num=1234.5678;
data=0.5;
price=50;
lastActive= new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
