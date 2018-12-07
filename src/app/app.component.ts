import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare function require(url: string);
let config = require('./config/credentials.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:any = 'meistertask-api-meanstack-app';
  baseUrl:any = "https://www.mindmeister.com/api/v2";
  err:any = '';
  user_det:any = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    this.http.get(this.baseUrl + '/users/me', {
      headers: {
        'Authorization': 'Bearer ' + config.mindmeister_public_accessToken
      }
    }).subscribe(
      data => {
        this.user_det = data;
        // Check before if user's email is activated or not
        if(this.user_det.activated == true) {
          console.log(this.user_det);
        } else {
          this.err = "User Email Not Activated";
        }
      }, err => {
        this.err = "Error- something is wrong!";
        console.log(this.err);
      }
    );

  }

}
