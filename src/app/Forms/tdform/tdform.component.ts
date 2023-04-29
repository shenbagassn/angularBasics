import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  doSubmit(form:NgForm){
    console.log("form submitted");
    console.log(form.value);
    form.reset();
  }
}
