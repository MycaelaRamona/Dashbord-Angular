import { Component, HostBinding, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  host: {
    class: 'dashboard-item'
  }
})
export class DashboardItemComponent {
 /*  @Input ({required: true}) image!: {src: string, alt: string};
  @Input ({required: true}) title!: string; */

  //Recebendo valores com a função input: Angular abaixo do 17.
  image = input.required<{src: string, alt: string}>();
  title = input.required<string>();

  //Esse recurso foi criado para se poder usar o Host em versões abixo do Agular 17
  //O mesmo funciona da mesma maniera que o Host declarado no @Component
  //@HostBinding('class') className = 'control';

}
