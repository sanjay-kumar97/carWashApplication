import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// @NgModule({
//   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
// });

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})



export class UserDashboardComponent implements OnInit {

  constructor(private route:Router,private auth:AuthenticationService) { }
  user = {displayName:""};
  UserSubmitData = {name:"",model:"",service:"",location:"",date:"",time:"",phonenumber:""};
  submit = false;

  ngOnInit(): void {
    this.auth.blockDashboard();
    if(!this.auth.isAuthenticated()){
      this.auth.getUserDetails().subscribe({
        next:data=>{
          this.user.displayName = data.users[0].displayName;
        }
      })
    }
  }
  MoveToHome(){
    this.route.navigate(['Home']);
  }
  sendDataToAdmin:any;
  onUserSubmit(){
    this.sendDataToAdmin = this.UserSubmitData;
    console.log(this.sendDataToAdmin)

  }
  }
