import { Component, OnInit,Input} from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  constructor(private auth:AuthenticationService) { }
  user = "Admin";

  ngOnInit(): void {
    this.auth.blockDashboard();
  }
}
