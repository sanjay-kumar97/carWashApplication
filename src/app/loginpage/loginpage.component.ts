import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private route:Router,private auth:AuthenticationService) { }
  LogInFormsData = {email:"",password:""};
  LogInFormadmin = {Aemail:"",AId:"",Apassword:""};
  submit = false;
  AdminSubmit = false;
  

  ngOnInit(): void {
    // this.auth.AfterAccountCreateGoToDashboard();

  }
  MoveToSignup(){
    this.route.navigate(['signup']);
  }
  MoveToHome(){
    this.route.navigate(['Home']);
  }

  onLogInUserSubmit(){
    console.log(this.LogInFormsData);
    this.auth.loginUser(this.LogInFormsData.email,this.LogInFormsData.password).subscribe({
      next:data=>{
        this.auth.storeToken(data.idToken);
        console.log(data.localId)
        console.log("LOGIN SUCCESSFUL!!");

        Swal.fire(
          'Success!',
          'Login is Successful',
          'success'
        )
        this.auth.AfterAccountCreateGoToDashboard();

      },
      error:data=>{
        if(data.error.error.message=="INVALID_PASSWORD"){
          Swal.fire('Oops!', 'Password is wrong, Please check the password once', 'error');
        }else if(data.error.error.message=="EMAIL_NOT_FOUND"){
          Swal.fire('Oops!', 'User not found, Kindly Signup', 'error');
          this.route.navigate(['signup']);

        }else{
          Swal.fire('Oops!', 'Unknown error occured', 'error');

        }
      }
    }).add(()=>{
      console.log("OVERALL CHECK LOGIN COMPLETED!!");
    });
    
  }
  uniqueMessage = "";
  onLogInAdminSubmit(){
      console.log(this.LogInFormadmin);
      if(this.LogInFormadmin.AId == "QWERTY123"){
        this.auth.loginUser(this.LogInFormadmin.Aemail,this.LogInFormadmin.Apassword).subscribe({
          next:data=>{
            this.auth.storeToken(data.idToken);
            console.log("LOGIN SUCCESSFUL!!");
    
            Swal.fire(
              'Success!',
              'Login is Successful',
              'success'
            )
            this.auth.AfterAccountCreateGoToDashboardAdmin();
    
          },
          error:data=>{
            if(data.error.error.message=="INVALID_PASSWORD"){
              Swal.fire('Oops!', 'Password is wrong, Please check the password once', 'error');
            }else{
              Swal.fire('Oops!', 'Unknown error occured', 'error');
    
            }
          }
        }).add(()=>{
          console.log("OVERALL CHECK LOGIN COMPLETED!!");
        });
      }else{
        alert("Unique ID is wrong")
  
      }
      
      
    }
}
