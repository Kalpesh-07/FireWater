import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SignIn } from 'src/app/models/auth-credential.model';
import { AuthsService } from 'src/app/service/auths.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('f') signupform : NgForm;
  user = {
    email : '',
    password : ''
  };
  submitted = false;

  constructor(private router : Router,
              private authService : AuthsService) { }

  ngOnInit(): void {
  }

  onSignup(){
    console.log("onSignup called");
    this.router.navigate(['/signup']);
    
  }

  onSubmit(f : NgForm){
    
    this.submitted = true;
    // this.user.email = this.signupform.value.email;
    // this.user.password = this.signupform.value.password;
    // console.log(this.user.email);
    // console.log(this.user.password);
    const userData : SignIn = {
      email : f.value.email,
      password : f.value.password
    }
    this.authService.signIn(userData);
    this.signupform.reset();
  }

}
