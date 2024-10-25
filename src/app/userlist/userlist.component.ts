import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {


router= new Router();
users: any =[
  {id:12,name:"user01",email: "U1@gmail.com",password:"123U1",phonenumber:123451},
  {id:13,name:"user02",email: "U2@gmail.com",password:"123U2",phonenumber:123452},
]
  
onEdit(id:number) {
alert(id);
this.router.navigate(['/edituser', id])

}
onDelete(id:number) {
  alert(id);
}

}
