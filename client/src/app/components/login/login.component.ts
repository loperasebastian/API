import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/services/users.service';
import { User } from 'src/app/models/user';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroupLogin: FormGroup;
  errorLogin: string;
  submitted = false;
  constructor(private usersService: UsersService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroupLogin = this.formBuilder.group({
      username: ['', Validators.required],
      pass: ['', Validators.required]
    });

  }

  get f() {
    return this.formGroupLogin.controls;
  }

  login() {
    this.submitted = true;
    const user: User = {
      username: this.f.username.value,
      pass: this.f.pass.value,
      };
    console.log(user);
    this.usersService.login(user).subscribe(
      res => {
        this.submitted = false;
        this.errorLogin = '';
        console.log(res);
        this.router.navigate(['/dashboard']);
      },
      err => {
        this.errorLogin = 'Error al validar los datos, intente nuevamente';
        console.log(err);
       }
      );

  }

}
