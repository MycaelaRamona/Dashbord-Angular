import { Component, DestroyRef, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host: {
    id: 'status'
  }
})
export class ServerStatusComponent implements OnInit/* , OnDestroy */ {
  //Além de dizer que a variavél é uma String, também especifiquei que deve ser umas 3:
  // 'online' | 'offline' | 'unknown'
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  //Criado para corrigiro o erro: da linha comentada abaixo:
  /* private interval ?: NodeJS.Timeout; */
  /* private interval ?: ReturnType<typeof setInterval>; */

  private destroyRef = inject(DestroyRef);

  /*  constructor(){} */

  ngOnInit(){
    console.log('ON INIT');

    /* this.interval = setInterval(( ) => { */
    const interval = setInterval(( ) => {
      const rnd = Math.random();

      if(rnd < 0.5){
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }

    }, 3000);

    this.destroyRef.onDestroy( ()=> {
      clearInterval(interval);
    })
  }

  ngAfterViewInit(){
    console.log('AFTER VIEW INIT');
  }

  //Para versões mais antigas do Angular:
  //com isso estamos certificando que o intervalo seja limpo quando o componete for removido.
  /* ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
 */

}
