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

/**
 * Typescript-Datei für User_login
 * */

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



  ngOnInit(): void {
  }

/**
 * Diese Methode nimmt die E-Mail und das Passwort des Benutzers und gibt ein leere string züruck
 * wenn der Benutzer gefunden wurde. andernfalls gibt sie einen Text zurück,
 * um anzuzeigen, dass der Benutzer nicht gefunden wurde
 **/
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

