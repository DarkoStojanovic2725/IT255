export class Init
{

  load(){
    if(localStorage.getItem('komponente') === null || localStorage.getItem('komponente') == undefined){
      console.log('Prazno');
      var komponente = [
        {
          text: 'Nesto'
        },
        {
          text: 'Nesto nnn'
        },
        {
          text: 'Komponenta n'
        }
      ];
      localStorage.setItem('komponente', JSON.stringify(komponente));
      return;
    } else {

      console.log('Elementi pronadjeni');
    }
  }

}
