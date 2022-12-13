import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employ',
  templateUrl: './view-employ.component.html',
  styleUrls: ['./view-employ.component.css']
})
export class ViewEmployComponent {
constructor(private api:ApiService){
  api.vieWEmploy().subscribe(
    (response)=>
    {
      this.data=response;
    }
  )
}
data:any=[]
}
