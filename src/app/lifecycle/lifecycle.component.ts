import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
@Input() myTitle:string='';
  constructor() { // when try to create instance of the component 
    console.log("constructor created");
      }
ngOnChanges(changes: SimpleChanges): void { //called when from outside any i/p property changed
  console.log("ngOnChanges invoked");
  }
  ngOnInit(): void { //called once when the component initialized or component instance created but before view ngOnInit called
    console.log("ngOnInit invoked");
  }

ngDoCheck(): void { //whenever change detection mechanism called /used for debugging purpose
  console.log("ngDoCheck invoked");
}

ngAfterContentInit(): void { //called when component content projected in view
  console.log("ngAfterContentInit invoked");
}
ngAfterContentChecked(): void {// called after ngDoCheck
  console.log("ngAfterContentChecked invoked");
  }

  ngAfterViewInit(): void {//called only once after whole view in browser
    console.log("ngAfterViewInit called");
      }
ngAfterViewChecked(): void { //called after ngAfterContentChecked
  console.log("ngAfterViewChecked called");
  }
ngOnDestroy(): void { //called when component is removed
  console.log("ngOnDestroy");
  
}
 
}
