import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = new FormGroup({
    fullName :new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    cpassword : new FormControl(''),
    role : new FormControl(''),
    trems : new FormControl(''),
  });

  onSumit() {
   console.log(this.registerForm.value

   );
   
    }
}
