import { Component } from '@angular/core';
import {KomponentaComponent} from './komponenta/komponenta.component';
import {ServisService} from './servis.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServisService],
})
export class AppComponent {
 // title = 'IT255-DZ09';
}
