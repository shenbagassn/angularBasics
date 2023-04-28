import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-defaultpipes',
  templateUrl: './defaultpipes.component.html',
  styleUrls: ['./defaultpipes.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom// encapsulation:ViewEncapsulation.None
})
export class DefaultpipesComponent implements OnInit {
  username: string = "SHENBA";
  place: string = "morrisville";
  msg: string = "hi im shenba from morrisville";
  obj = { fname: "shenba", age: 30 };
  num = 1234.5678;
  data = 0.5;
  price = 50;
  limit = 0;
  lastActive = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
