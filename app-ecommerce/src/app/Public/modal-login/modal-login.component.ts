import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Client } from 'src/app/Interfaces/client';
import { User } from 'src/app/Interfaces/user';
import { ClientService } from 'src/app/Services/client.service';
import { UserService } from 'src/app/Services/user.service';
import { UtilService } from 'src/app/Services/util.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  rFormsObj: FormGroup;

  constructor(
    private fb: FormBuilder,
    public _myClient: ClientService,
    public _myUser: UserService,
    private ro: Router,
    public util: UtilService,
    public dialogRef: MatDialogRef<ModalLoginComponent>,
  ) {
    this.rFormsObj = fb.group({
      'user': ['', Validators.required],
      'password': ['', Validators.required],
      'type': ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  login() {
    if (this.rFormsObj.controls['type'].value == 1) {
      let body = {
        user: this.rFormsObj.controls['user'].value,
        password: this.rFormsObj.controls['password'].value,
      } as User
      this._myUser.auth(body).subscribe(
        data => {
          console.log('Exitoso: ', data);
          this.util.private = true;
          this.dialogRef.close();
          this.ro.navigate(['/dashboard']);
        }
      )
    } else if (this.rFormsObj.controls['type'].value == 2) {
      let body = {
        user: this.rFormsObj.controls['user'].value,
        password: this.rFormsObj.controls['password'].value,
      } as Client
      this._myClient.auth(body).subscribe(
        data => {
          console.log('Exitoso: ', data);
          this.util.private = false;
          sessionStorage.setItem(btoa('client'), JSON.stringify(data));
          this.dialogRef.close();
        }
      )
    }
  }

}
