import { increment } from './../state/counter/counter.action';
import { Component, OnInit , inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';
import Toast from 'sweetalert2';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

id:any;
  items:any
  //private store = inject(Store)
  phone=[
    {id:1,title:"iphone",name:"Iphone 14 pro",price:2500,img:"/assets/iphone14.jpg"},
    {id:2,title:"iphone",name:"Iphone 15 pro",price:3000,img:"/assets/iphone15.jpg"},
     {id:3,title:"Samsung",name:"Samsung s21",price:2500,img:"/assets/samsung s21.jpg"},
     {id:4,title:"Samsung",name:"Samsung s22 ",price:4000,img:"/assets/samsung s22.jpg"},
  ]

  constructor(private router:ActivatedRoute , private store: Store){}

  increment(){
    this.store.dispatch(increment())
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "تمت الإضافة الى السلة بنجاح"
    });
  }
  ngOnInit()
  {
    this.id=this.router.snapshot.paramMap.get('id');
    this.items=this.phone.filter(e=>e.id==this.id);
    console.log(this.items)
  }

}