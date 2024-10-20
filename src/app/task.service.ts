import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
url = 'http://localhost:5067/api/TaskItems';
  constructor(private http : HttpClient) { }

getTasks(){
return this.http.get<any[]>(this.url);
}

deleteTask(id:number){
return this.http.delete(this.url+"?id="+id)
}

addtask(task:any){
  return this.http.post(this.url,task);
}

}
