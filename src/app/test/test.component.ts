import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
name:String;
age:number;
salary:number;
address:any;
text:any;
constructor(){
  this.name='sahithi';
  this.age=12;
  this.salary=68907;
  this.address={doorno:5, street:"miyapur",city:"hyderabad"}
  this.text='test component works'
}
}
