import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  public arrs=[{name:"first",value:true},
                {name:"second",value:false},
                {name:"third",value:false}];

  public arrs2=[{name:"first",value:false},
  {name:"second",value:false},
  {name:"third",value:false}];
  
  constructor() { }

  ngOnInit() {
  }

  check(){
    console.log(this.arrs[0].value);
    //console.log(this.first.value);
    //console.log(this.second);
    
    
  }

}
