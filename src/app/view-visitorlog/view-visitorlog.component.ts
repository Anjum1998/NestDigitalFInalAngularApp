import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-visitorlog',
  templateUrl: './view-visitorlog.component.html',
  styleUrls: ['./view-visitorlog.component.css']
})
export class ViewVisitorlogComponent {
  constructor(private api:ApiService){
    api.vieWVisitorLog().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]
}
