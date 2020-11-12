import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { error } from '@angular/compiler/src/util';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  errorMessage:String;
  successMessage:String;

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{

        this.successMessage = "Response received"
        this._router.navigate(['/home'])
      },    
        error => {
        this.errorMessage = "Error: Incorrect username or password"
      // this._router.navigate(['/home'])
    }
      
    )
  }
  gotoregistration(){
    this._router.navigate(['/register'])
  }

}
