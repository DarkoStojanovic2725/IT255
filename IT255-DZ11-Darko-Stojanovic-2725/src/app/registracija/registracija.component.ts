import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  http: Http;

  dodajKorisnika = new FormGroup({
    Name: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    city: new FormControl()
  });
  constructor(http: Http) {
    this.http = http;

  }

  ngOnInit() {
  }
  onDodajKorisnika(){
    const data = 'Name=' + this.dodajKorisnika.value.Name + '&lastName=' +
      this.dodajKorisnika.value.lastName + '&email=' +
      this.dodajKorisnika.value.email + '&city=' +
      this.dodajKorisnika.value.city;
    console.log(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost/test/registerservice.php',
      data, { headers: headers }).subscribe(
      data => {
        if (data['_body'] == 'ok') {
          console.log('uspesno');
        }
      }
    );
  }

}
