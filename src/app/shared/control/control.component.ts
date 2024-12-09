import { AfterContentInit, Component, contentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {

  label = input.required<string>();
  private el = inject(ElementRef);

  private control = contentChild<ElementRef<HTMLInputElement>>('input');

  ngAfterContentInit(): void {
    
  }

  onClick(){
    console.log('Clicked!!!');
    console.log(this.el)
  }


}