import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService, user } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  userId:number;

  constructor(private route: ActivatedRoute, private userS : UserService){
    const uid = this.route.snapshot.paramMap.get("Uid");
    this.userId = Number(uid);

  }
  edituserform = new FormGroup({
    id: new FormControl(), 
    name: new FormControl(''), 
    email: new FormControl(''),
    password: new FormControl(''),
    phonenumber: new FormControl('')

  });
  ngOnInit(): void {
     this.userS.getsingleUser(this.userId).subscribe(user =>{
      this.edituserform.patchValue({
        id : user.id,
        name:user.name,
        email:user.email,
        password:user.password,
        phonenumber:user.phonenumber
  
      });
    })
  }

onCancel() {
throw new Error('Method not implemented.');
}
onSumit() {
const Uuser = this.edituserform.value;
this.userS.updateUser(Uuser).subscribe(u =>{
  console.log(u); 
  alert("Update Successfully"); 
})
}

}
