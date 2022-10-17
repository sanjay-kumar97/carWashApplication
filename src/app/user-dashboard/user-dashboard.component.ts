import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})




export class UserDashboardComponent implements OnInit {
  cookieValue: string | undefined;

  constructor( private cookieService: CookieService ,private route:Router,private auth:AuthenticationService, private loginPage: LoginpageComponent) { }

  user = {displayName:""};
  UID = sessionStorage.getItem("UID");
  UserSubmitData = {name:"",model:"",service:"",location:"",date:"",time:"",phonenumber:"", userId:this.UID};

  submit = false;

  ngOnInit(): void {
    console.log(this.UID);
    this.UID = sessionStorage.getItem("UID");
    // this.cookieService.set( 'data', '' ); // To Set Cookie
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
    // this.sendDataToAdmin = this.UserSubmitData;
    // const cookie_data = this.cookieService.get("data");
    // if(!cookie_data){
    //   this.cookieService.set( 'data', JSON.stringify(this.UserSubmitData));
    // }else{
    //   this.cookieService.set( 'data', cookie_data + "|" + JSON.stringify(this.UserSubmitData));
    // }
    // console.log(this.cookieService.get("data"));
    Swal.fire(
      'Success!',
      'Booking done successfully',
      'success'
    )
    // location.reload();
  }
  }
