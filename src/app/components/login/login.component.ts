import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {user} from "./user";
import {count} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  //matcher = new MyErrorStateMatcher();
  email=new FormControl('');
  password=new FormControl('');
  isNotUser:boolean= false;
  errorLoging:string= "prüft deine password oder deine Email"
  constructor(private router:Router) { }

  navigateToLogin() {
    this.router.navigateByUrl('/products');
  }

  ngOnInit(): void {
  }


   findUser(email:string,password:string): string{
    for(let i=0; i<user.length;i++){
      if(user[i].email===email && user[i].password===password){
        console.log("user is login",email,password);
        this.router.navigate(['/products']);
         return "";
      }
    }
    this.isNotUser=true;
    return this.errorLoging;
}

}

