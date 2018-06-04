import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event2',
  templateUrl: './event2.component.html',
  styleUrls: ['./event2.component.css']
})
export class Event2Component implements OnInit {
  public val
  constructor() { }

  ngOnInit() {
  }

  action(){
    console.log(this.val);
    
  }

}
