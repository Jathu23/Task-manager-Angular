import { Component, OnInit } from '@angular/core';
import { TaskService, task } from '../task.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-task-list',
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnInit{


constructor(private task : TaskService ,private router: Router){}

onDelete(id:number) {
this.task.deleteTask(id).subscribe(d=>{
  alert("delete");

this.task.getTasks().subscribe(data => {
  this.tasks=data;
  
});
})

}
onEdit(id: number) {
  this.router.navigate(['/edit', id])
  }

tasks :task[] =[];

ngOnInit(): void {
  this.task.getTasks().subscribe(data => {
    this.tasks=data;
   
  });
  
}
}
