import { Component, input, output, signal } from '@angular/core';
import type { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  close = output();
  detailsVisible = signal(false);

  onToggleDatails(){
    //this.detailsVisible.set(!this.detailsVisible());

    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted(){
    this.close.emit();
  }


}
