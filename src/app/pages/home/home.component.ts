import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nombre: String = "Nombre Usuario";

  // cambiarNombre(){
  //   this.nombre = "Ronaldo";
  // }
}
