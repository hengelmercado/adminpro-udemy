import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() {
    this.regresaObservable()
    .subscribe(
      numero => console.log( 'Subs ' + numero),
      error => console.error( 'Auxilio!' ),
      () => console.log('Termino!')
    );
   }

  ngOnInit(): void {
  }

  regresaObservable(): Observable<any> {
    return new Observable( (observable: Subscriber<any>) => {
      let contador = 0;

      const intervalo = setInterval(() => {

        contador += 1;
        observable.next(contador);

        if (contador === 3){
          clearInterval(intervalo);
          observable.complete();
        }

        /* if (contador === 2) {
          //clearInterval(intervalo);
          observable.error();
        } */

      }, 1000);
    });
  }

}
