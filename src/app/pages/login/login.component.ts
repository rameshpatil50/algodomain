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
}

login() {
  console.table(this.loginForm.value);
  if(this.loginForm.valid){
    this._rest.userLogin(this.loginForm.value).subscribe(
      (data) => {
        console.log(data);
        this.loginForm.reset();
        this.router.navigate(['/home']);
      }
    );
  }

}
}
