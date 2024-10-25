import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {



  
  userform = new FormGroup({

    name: new FormControl(''), 
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl('')

  });
  
onCancel() {

}
onSumit() {
  const user = this.userform.value;
  this.userform.reset();
  console.log(user);
  
}

}
