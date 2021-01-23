import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
//import { Interface } from 'readline';
export interface finalData{
  salt:string,
  passwordHash:string
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userPassword: string = '';
  tutorial: string = '';
  salt: string = '';
  passwordHash: string = '';
 
  
  constructor(private http: HttpClient) {
    this.http = http;
    
  }
  title = 'mean-task';
  ngOnInit() {

  }
  encryptPassword() {
    console.log('inside encrypt password' + this.tutorial)
  }
  saltgeneration() {
    console.log('password' + this.userPassword)
    var userParams = { password: this.userPassword };

    this.http.post<finalData>('/api/serverside/saltGen', userParams).subscribe((res) => {
     //  this.finalData=res;
     this.salt=res.salt;
     this.passwordHash=res.passwordHash;
     console.log(this.salt);
     console.log(this.passwordHash);
     // this.salt=res[salt];
      //this.passwordHash=res.passwordHash;

      console.log('response test' + JSON.stringify(res));

      if (res) {
        console.log(res)
      } else {
        console.log("Error")
      }
    })
  }
  encryption() {

  }
}
