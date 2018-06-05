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
    try{

      let parent = document.getElementById('parent');
      let child = document.getElementById('child2');
      /**
      * Try to modify the third parameter true/false to check the order of invocation
      * Explained in this : https://javascript.info/bubbling-and-capturing
      * true - Event Capturing
      * false - Event Bubbling
      * Note: By default click handler in angularjs make use of bubbling phase only. What you have seen is bubbling
      */
      parent.addEventListener('click',(event)=>{
      console.log("Parent invoked");
      }, true);
      child.addEventListener('click', ()=>{
      console.log('Child Invoked');
      }, true)
      }catch(ex){
      
      }
    }
    
      action1(a){
      console.log(a);
      }
      
      onEvent(event) {
      event.stopPropagation();
      }
      
      parentEvent(event, title){
      console.log(title);
      }
    

      action(a){
        console.log(a);
        
      }

  
 }


