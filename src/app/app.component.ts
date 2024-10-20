import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{


  constructor(private task : TaskService){}

onDelete(id:number) {
this.task.deleteTask(id).subscribe(d=>{
  alert("delete");
console.log(d);
})

}
onEdit(id: number) {
 alert(id);
  }


  

tasks :any[] =[];

ngOnInit(): void {
  this.task.getTasks().subscribe(data => {
    this.tasks=data;
    console.log(this.tasks);
  });
  
}
}
