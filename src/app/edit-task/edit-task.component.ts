import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit-tasktaskId: numbertaskId?: numbertaskId: anytaskId: numbertaskId: number',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent  implements OnInit {
  taskId: number
  taskForm: FormGroup;

  constructor(private route: ActivatedRoute, private taskService: TaskService,
    private fb: FormBuilder, private router: Router) {

      const tid = this.route.snapshot.paramMap.get("id");
      this.taskId = Number(tid);
  
      this.taskForm = this.fb.group({
        id: [''],
        title: ['', [Validators.required]],
        description: [''],
        dueDate: [''],
        priority: ['', [Validators.required]],
      })
    }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(d =>{
      
    })
  }
  



  }



