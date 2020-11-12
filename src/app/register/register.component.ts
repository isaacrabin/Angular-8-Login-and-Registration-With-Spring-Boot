import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { error } from '@angular/compiler/src/util';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();
  message:String;


  constructor(private _service:RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }
  register(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{
        this.message="Registration Succeeded proceed now to login";
        this._router.navigate(['/login'])
      },
      error =>{
        this.message="An error occurred";
      }
    )

  }
  gotologin(){
    this._router.navigate(['/login']);
  }

}
