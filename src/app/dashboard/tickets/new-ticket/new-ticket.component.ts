import { Component, ElementRef, EventEmitter, output, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  //@Output() add = new EventEmitter<{title: string, text: string}>();
  add = output<{title: string, text: string}>();

  enteredTitle = '';
  enteredText = '';

  ngAfterViewInit(){
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  onSubmit(){

    this.add.emit({title: this.enteredTitle, text: this.enteredText});
    
    //Lipeza do formulário
    //this.form?.nativeElement.reset();

    //Outra maneira de limpar o formulário:
    this.enteredTitle = '';
    this.enteredText = '';



  }

}
