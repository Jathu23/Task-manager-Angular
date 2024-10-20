import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {


taskform: FormGroup;

constructor(private fb : FormBuilder,private taskservice : TaskService){
  this.taskform = this.fb.group({
    title :['',[Validators.required]],
    description :['',[Validators.required]],
    dueDate : ['',],
    priority :['',[Validators.required]]
  })
}

onSumit() {
let task  = this.taskform.value;
this.taskservice.addtask(task).subscribe(d =>{
console.log(d);

});
}
onCancel() {

}


}
