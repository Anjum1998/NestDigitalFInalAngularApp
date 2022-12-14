import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-emplog',
  templateUrl: './view-emplog.component.html',
  styleUrls: ['./view-emplog.component.css']
})
export class ViewEmplogComponent {
  constructor(private api:ApiService){
    api.vieWEmployLog().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]
}
