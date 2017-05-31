import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  poruka = '';

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  http: Http;



  constructor(http: Http) {
    this.http = http;
    if (localStorage.getItem('token') != null) {
      console.log('token postoji');
    }
  }


  ngOnInit() {
  }
  onLogin() {
    let data =
      'username=' + this.loginForm.value.username + '&password=' + this.loginForm.value.password;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost/IT255-DZ12/loginservice.php', data,
      {headers: headers})
      .map(res => res)
      .subscribe( data => {
          const obj = JSON.parse(data['_body']);
          localStorage.setItem('token', obj.token);
          console.log('uspesno');
          this.poruka = 'Uspesan login';
        },
        err => {
          let obj = JSON.parse(err._body);
          let element = <HTMLElement>document.getElementsByClassName('alert')[0];
          element.style.display = 'block';
          element.innerHTML =
            obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
        }
      );
  }


}
