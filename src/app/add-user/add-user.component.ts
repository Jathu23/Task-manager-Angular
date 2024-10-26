import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {


constructor(private userS : UserService){}
  
  userform = new FormGroup({

    name: new FormControl(''), 
    email: new FormControl(''),
    password: new FormControl(''),
    phonenumber: new FormControl('')

  });
  
onCancel() {

}
onSumit() {
  const user = this.userform.value;
  console.log(user);
  
this.userS.addUser(user).subscribe(u => {
  console.log(u);
})
  this.userform.reset();

  
}

}
