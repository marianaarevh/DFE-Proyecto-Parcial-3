import { Component, Input } from '@angular/core';
import { Videojuego } from 'src/app/models/videojuego';


@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {
@Input() mensaje: string = ""
@Input() datos: Videojuego[] = []

}
