import { Component,inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  count$?:Observable<number>
  constructor(private store: Store) {
  this.count$=this.store.select("counter")
  }
}
