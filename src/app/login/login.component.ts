import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  Loginform = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });

  onSumit() {
    console.log(this.Loginform.value);
 
  }
}
