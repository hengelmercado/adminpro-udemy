import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgres') txtProgres: ElementRef;
 
  @Input() leyenda: String = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(newValue: number){
   // let elementHTML: any = txtProgres;

    if (newValue >= 100) {
      this.progreso = 100;
    }else if ( newValue <= 0 || newValue == null){
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }

    this.txtProgres.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  cambiarvalor(valor: number) {

    if (this.progreso >= 100 && valor > 0) {
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit(this.progreso);

    this.txtProgres.nativeElement.focus();
  }

}
