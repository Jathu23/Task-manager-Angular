import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  // taskform: FormGroup;
  userform: FormGroup;

  constructor(private userS: UserService, private fb: FormBuilder) {
    let today = new Date().toISOString().slice(0, 10);

    // // Initialize taskform using FormBuilder
    // this.taskform = this.fb.group({
    //   title: ['', [Validators.required]],
    //   description: ['', [Validators.required]],
    //   dueDate: [today],
    //   priority: ['Low', [Validators.required]],
    // });

    // Initialize userform using FormBuilder
    this.userform = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]], 
      taskItems : this.fb.group({
        title: [''],
        description: [''],
        dueDate: [''],
        priority: [''],
      })
    });
  }

  onSumit() {
    let user = this.userform.value;
    const body = {
      name: this.userform.value.name,
      email: this.userform.value.email,
      password: this.userform.value.password,
      phonenumber: this.userform.value.phonenumber,
      taskItems: [this.userform.value.taskItems]  // Directly using taskform value here
    };
  
    console.log("ferfe"+body);
  
    this.userS.addUser(body).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error('Error:', error)  // Improved error handling
    });
  
    this.userform.reset();
    // this.taskform.reset();  // Reset task form as well, if needed
  }
  



  onCancel() {

  }

}
