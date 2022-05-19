import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algodomain';

  loginForm: any;

  ngOnInit(): void {
    this.loginForm = new FormGroup ({
      username: new FormControl (['', Validators.required]),
      password: new FormControl (['', Validators.required])
    });
}

login() {
  console.log(this.loginForm.value);
}

}

