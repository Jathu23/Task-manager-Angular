import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, user } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})

export class UserlistComponent {

  userId:number;

  constructor(private route: ActivatedRoute, private userS : UserService){
    const uid = this.route.snapshot.paramMap.get("Uid");
    this.userId = Number(uid);

  }
router= new Router();
users: user[] =[]

  
ngOnInit(): void {
  this.userS.getUsers().subscribe(data => {
    this.users=data;
   
  });
}

onEdit(id:number) {
  alert(id);
  this.router.navigate(['/edituser', id])
  
  }
  onDelete(userId:number) {
    alert(userId);
    this.userS.deleteUser(userId).subscribe(u =>{
      console.log(u);
      this.userS.getUsers().subscribe(data => {
        this.users=data;
       
      });
    })

    
  }

}
