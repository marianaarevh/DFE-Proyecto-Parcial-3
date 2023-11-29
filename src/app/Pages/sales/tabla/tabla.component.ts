import { Component, Input } from '@angular/core';
import {Videojuego} from 'src/app/models/videojuego';
import { listaVideojuegosDummy } from 'src/app/models/videojuego';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  @Input() datos!:any[];
  //@Input() datos: Videojuego[] = []

  rutaImagen = '../../../../assets/img/videojuegos/';

}
