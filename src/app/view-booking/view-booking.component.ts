import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service/lib/cookie.service';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  constructor(private cookieService: CookieService) { }
  user = "Admin";
  UID = sessionStorage.getItem('UID');
  // cookie_data :string[];
  bookingData: Array<any> = [];
  ngOnInit(): void {
    let cookie_data = this.cookieService.get("data").split("|");
    for(let i = 0; i < cookie_data.length; i++) {
      cookie_data[i] = JSON.parse(cookie_data[i]);
      console.log(cookie_data[i]);
    }
    // $scopes.cookie_data = cookie_data;
    this.bookingData = cookie_data;
    // console.log(this.bookingData +" "+ this.UID);
  }
}
