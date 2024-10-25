import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  userid = 12;

  users: any =[
    {id:12,name:"user01",email: "U1@gmail.com",password:"123U1",phonenumber:123451},
    {id:13,name:"user02",email: "U2@gmail.com",password:"123U2",phonenumber:123452},
  ]


  edituserform = new FormGroup({

    name: new FormControl(''), 
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl('')

  });


  ngOnInit(): void {
    const user = this.users[0];

    this.edituserform.patchValue({
      name:user.name,
      email:user.email,
      password:user.password,
      phone:user.phonenumber

    });
  }
onCancel() {
throw new Error('Method not implemented.');
}
onSumit() {
throw new Error('Method not implemented.');
}

}
