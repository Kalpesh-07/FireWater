import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthsService} from 'src/app/service/auths.service';
import { SignUp } from 'src/app/models/auth-credential.model';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user = {
    fname : '',
    lname : '',
    email : '',
    password : '',
    cpassword : ''
  };
  submitted = false;

  constructor(private router : Router,
              private authService : AuthsService) { }

  ngOnInit(): void {
  }
  onSignin(){
    console.log("onSignin");
    this.router.navigate(['/signin']);
  }

  onSubmit(f : NgForm){
    console.log(f);
    
    this.submitted = true;
    this.user.fname = f.value.fname;
    this.user.lname = f.value.lname;
    this.user.email = f.value.email;
    this.user.password = f.value.password;
    this.user.cpassword = f.value.cpassword;
    console.log(this.user.fname);
    console.log(this.user.lname);
    console.log(this.user.email);
    console.log(this.user.password);

    const userData : SignUp = {
      fname : f.value.fname,
      lname : f.value.lname,
      email : f.value.email,
      password : f.value.password
    };

    this.authService.signUp(userData);
    
    f.reset();
    this.router.navigate(['/signin']);
  }

}
