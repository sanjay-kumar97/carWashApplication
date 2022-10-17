import { Component, OnInit,Input} from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
// @NgModule({
//   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
// })

// @Input()const datasVisible ={};

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})


export class AdminDashboardComponent implements OnInit {
  constructor(private cookieService: CookieService, private auth:AuthenticationService) { }
  user = "Admin";
  // cookie_data :string[];
  bookingData: Array<any> = [];
  ngOnInit(): void {
    this.auth.blockDashboard();
    let cookie_data = this.cookieService.get("data").split("|");
    for(let i = 0; i < cookie_data.length; i++) {
      cookie_data[i] = JSON.parse(cookie_data[i]);
    }
    // $scopes.cookie_data = cookie_data;
    this.bookingData = cookie_data;
  }
}
