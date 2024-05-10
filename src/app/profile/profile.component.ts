import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
name:string;
idCardNo:number;
constructor(){
  this.name='Sahithi yeluri';
  this.idCardNo=2302143
}
}
