import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';

@Component({
  selector: 'app-komponenta',
  templateUrl: './komponenta.component.html',
  styleUrls: ['./komponenta.component.css'],
})
export class KomponentaComponent implements OnInit {
  komponenta;
  item;
  constructor(private servis: ServisService) { }
  ngOnInit() {
    this.komponenta = this.servis.getItems();
  }
  addTekst()
  {
    var newItemz = {
      text: this.item
    }
    this.komponenta.push(newItemz);
    this.servis.addTekst(newItemz);

  }
  brisi(obrisati){
    for (var i = 0; i < this.komponenta.length; i++){
      if (this.komponenta[i].text == obrisati){
        this.komponenta.splice(i, 1);
      }
    }
    this.servis.brisi(obrisati);
  }

}
