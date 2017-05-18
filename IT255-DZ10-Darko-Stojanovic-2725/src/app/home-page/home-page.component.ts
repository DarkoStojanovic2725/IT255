import { Component, OnInit } from '@angular/core';
import { Http, Response , Headers} from '@angular/http';
import 'rxjs/Rx';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  data: Object[];
 // name: String = '';
  constructor(private http: Http) {
    /*this.http.get('assets//users.json').subscribe(
      data => {
        this.data = JSON.parse(data['_body']);
      },
      err => console.log(err.text()),
      () => {
      }
    );*/
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    http.get('http://localhost/it255/getUsers.php', {headers: headers})
      .map(res => res.json()).share()
      .subscribe(data => {
          this.data = data;
          console.log('uspesno');
        },
        err => console.log(err.text()),
        () => {
        }
      );

  }

  ngOnInit() {
  }

}
