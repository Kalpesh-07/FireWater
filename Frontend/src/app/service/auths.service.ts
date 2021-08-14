import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SignUp, SignIn } from '../models/auth-credential.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthsService {

  private ServerURL = environment.SERVER_URL;
  

  constructor(private httpClient : HttpClient,
              private toast : ToastrService) { }

  signUp(userData : SignUp){
    this.httpClient.post(`${this.ServerURL}/auth/signup`, userData).subscribe(res =>{
      console.log(res);
      
    })

    this.toast.success(`${userData.fname}, Your Account Created Successfully. Please Login to your account`, "Done", {
      timeOut: 2500,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-full-width'
    })
  }

  signIn(userData : SignIn){
    this.httpClient.post(`${this.ServerURL}/auth/signin`, userData).subscribe(res=>{
      console.log('Login success');
      console.log(res);
    
    });
  }
}
