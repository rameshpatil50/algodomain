import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from './service/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algodomain';

  loginForm: any;
  constructor(private _rest:RestService, private router:Router) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup ({
      Email_Id: new FormControl (['']),
      Password: new FormControl ([''])
    });
}

login() {
  if(this.loginForm.valid){
    this._rest.userLogin(this.loginForm.value).subscribe(
      (data) => {
        console.log(data);
        this.loginForm.reset();
        this.router.navigate(['/home']);
        alert("thank you");
      }
    );
  }

}

}

