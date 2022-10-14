import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupPageComponent } from './sign-up-page/sign-up-page.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';


const appRoute: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home', component:HomePageComponent},
  {path:'login', component:LoginpageComponent},
  {path:'signup', component:SignupPageComponent},
  {path:'userdashboard', component:UserDashboardComponent},
  {path:'admindashboard', component:AdminDashboardComponent},

  // {path:'contactus', component:ContactusPageComponent},
  // {path:'dashboard/predictionpage', component:PredictionPageComponent},
  // {path:'dashboard/predictionpage/predictionoutputpage', component:PredictionOutputPageComponent},



];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginpageComponent,
    SignupPageComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
