import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employ',
  templateUrl: './add-employ.component.html',
  styleUrls: ['./add-employ.component.css']
})
export class AddEmployComponent {
  empcode=""
  empname=""
  designation=""
  salary=""
  username=""
  password=""
constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any={"empcode":this.empcode,"empname":this.empname,"designation":this.designation,
    "salary":this.salary,"username":this.username,"password":this.password}
    console.log(data)
    this.api.addEmploy(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("employ added successfully")
          this.designation=""
          this.empcode=""
          this.empname=""
          this.password=""
          this.salary=""
          this.username=""
        } else {
          alert("something wrong")
        }
      }
    )
  }
}
