import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() nombreHijo: String = "sin nombre";
  @Output() cambioNombreHijo = new EventEmitter<String>();
  
  cambiarNombre(nombreC: String){
    this.nombreHijo = String(nombreC);
    this.cambioNombreHijo.emit(this.nombreHijo);
  }

}
