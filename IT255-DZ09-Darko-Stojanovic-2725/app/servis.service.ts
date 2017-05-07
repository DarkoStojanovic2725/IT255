import { Injectable } from '@angular/core';
import {Init} from './storage';

@Injectable()
export class ServisService extends Init {

  constructor() {
    super();
    console.log('Servis aktivan...');
    this.load();
  }

  getItems()
  {
    var item = JSON.parse(localStorage.getItem('komponente'));
    return item;
  }

  addTekst(newItemz) {
    var item = JSON.parse(localStorage.getItem('komponente'));
    item.push(newItemz);
    localStorage.setItem('komponente', JSON.stringify(item));
  }
  brisi(obrisati) {
    var komponenta = JSON.parse(localStorage.getItem('komponente'));
    for (var i = 0; i < komponenta.length; i++){
      if (komponenta[i].text == obrisati){
        komponenta.splice(i, 1);
      }
    }
    localStorage.setItem('komponente', JSON.stringify(komponenta));
  }


}
