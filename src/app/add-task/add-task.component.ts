import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { user, UserService } from '../user.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {
  taskform: FormGroup;
  users: user[] = [];
  
  constructor(private fb: FormBuilder,
    private taskservice: TaskService,
    private router: Router,
    private userService :UserService
  ) {
    let today = new Date().toISOString().slice(0, 10);
    this.taskform = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dueDate: [today,],
      priority: ['Low', [Validators.required]],
      userId: ['1']
    })

  }

  onSumit() {
    let task = this.taskform.value;
    console.log(task);
    this.taskservice.addtask(task).subscribe(d => {
      console.log("result", d);
      this.router.navigate(["/tasklist"]);
    });
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data: user[]) => {
      console.log(data.length);
      this.users = data;
    });
  }
  

  onCancel() {

  }


}
