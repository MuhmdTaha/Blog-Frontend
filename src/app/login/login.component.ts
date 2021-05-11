import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../module/blog';
import { Login } from '../module/login';
import { LoginService } from '../service/login.service';
import { first } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: any;
  public error: string;
  constructor(public routs: Router, public auth: AuthService) { }
  onSubmit(log) {
    this.auth.login(log.username, log.password)
      .pipe(first())
      .subscribe(
        result =>
          this.routs.navigate(['/home']),
        err => this.error = 'The username or password is not correct\n'
      );

  }
  ngOnInit(): void {}

}
