import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  currentUserName: any;
  userName: void;

  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService,
    private router: Router) {

    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    // console.log('loin form', this.loginForm.value);
    this.sharedService.login(this.loginForm.value).subscribe((res: any) => {
      console.log('sdjshjdsrelogin', res);
      if (res && res.length > 0) {
        this.currentUserName = res[0].fullName;
        this.userName = localStorage.setItem('user', this.currentUserName);
        this.router.navigate(['./product-list']);
      }
    });
  }

}
