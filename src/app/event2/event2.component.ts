import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event2',
  templateUrl: './event2.component.html',
  styleUrls: ['./event2.component.css']
})
export class Event2Component implements OnInit {
  public head=["Name","Email","Age"];
  public details=[{name:"Akash",email:"akash@akash.com",age:25,},
                  {name:"Deepak",email:"deepak@deepak.com",age:26},
                  {name:"Sameer",email:"sameer@sameer.com",age:25}]
  constructor() { }

  ngOnInit() {
  }

  action(a){
    console.log(a);
    
  }

  onEvent(event) {
    event.stopPropagation();
 }

}
