import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
url = 'http://localhost:5067/api/TaskItems';
  constructor(private http : HttpClient) { }

getTasks(){
return this.http.get<task []>(this.url);
}
getsingleTask(id:number){
  return this.http.get<task> (this.url+"/single?id="+id);
 
}

deleteTask(id:number){
return this.http.delete(this.url+"?id="+id)
}

addtask(task:task){
  return this.http.post(this.url,task);
}

updateTask(task:task){
  return this.http.put(this.url,task);
}

}
export interface task{
  id:number;
  title: string;
  description: string;
  dueDate:string;
  priority: string
  

}
