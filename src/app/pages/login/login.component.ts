import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  constructor(private _rest:RestService, private router:Router) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup ({
      Email_Id: new FormControl (['']),
      Password: new FormControl ([''])
    });
    //Function for redirecting to home page if localstorage has data
    if(localStorage.getItem('user')){
      this.router.navigate(['/home']);
    }
    
}

login() {
  console.table(this.loginForm.value);
  if(this.loginForm.valid){
    this._rest.userLogin(this.loginForm.value).subscribe(
      (data) => {
        //save data to localstorage
        localStorage.setItem('user', JSON.stringify(data));
        console.log(data);
        this.loginForm.reset();
        this.router.navigate(['/home']);
      }
    );
  }
}
}
