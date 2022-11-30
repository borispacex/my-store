import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  value: string = '';
  @Input()
  set ChangeValue(newValue: string) {
    this.value = newValue;
    // aqui ya puedo aplicar un codigo, cuando camie el valor del input
  }
  counter: number = 0;
  counterFin: number | undefined;

  constructor() {
    // corre desde el inicio, esdecir corre antes del render
    console.log('Constructor');
    // no correr cosas asincronas(peticion, fetch, suscripcion) y solo se corre una vez
    // async -- once time
  }

  ngOnChanges(changes: SimpleChanges) {
    // Tambien corre antes del render y durante el render
    // Estar actualizando en los inputs (Changes inputs --- times), corre muchas veces 
    console.log('ngOnChanges');
    console.log('simpleChanges: ', changes);
    // if (change.) {
    //   // code
    // }
  }

  ngOnInit(): void {
    // Tambien corre antes del render
    // Aqui sipodemos correr cosas asincronas (Fetch, llamadas api, promesas) y corre solo una vez
    console.log('ngOnInit');
    this.counterFin= window.setInterval(() => {
      this.counter += 1;
      console.log('run counter ', this.counter);
    }, 1000);
  }

  ngAfterViewInit() {
    // Corre despues del render
    // Aqui manemos los hijos (handler)
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // Corre cuando se elemina el componente
    console.log('ngOnDestroy');
    window.clearInterval(this.counterFin);
  }


}
