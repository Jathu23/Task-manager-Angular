import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
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
console.log(d);
this.task.getTasks().subscribe(data => {
  this.tasks=data;
  console.log(this.tasks);
});
})

}
onEdit(id: number) {
  this.router.navigate(['/edit', id])
  }

tasks :any[] =[];

ngOnInit(): void {
  this.task.getTasks().subscribe(data => {
    this.tasks=data;
    console.log(this.tasks);
  });
  
}
}
