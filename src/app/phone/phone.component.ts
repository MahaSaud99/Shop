import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  phone=[
   
    {id:1,title:"iphone",name:"Iphone 14 pro",price:2500,img:"./assets/f.jpg"},
    {id:2,title:"iphone",name:"Iphone 15 pro",price:3000,img:"./assets/f.jpg"},
    {id:3,title:"Samsung",name:"Samsung s21",price:2500,img:"./assets/h.jpg"},
    {id:4,title:"Samsung",name:"Samsung s22 ",price:4000,img:"./assets/h.jpg"},
 ]

}
