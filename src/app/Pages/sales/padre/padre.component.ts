import { Component } from '@angular/core';
import { Videojuego, listaVideojuegosDummy } from 'src/app/models/videojuego';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  listadoJuegos: Videojuego[] = listaVideojuegosDummy;
  mensaje: string = "Numero de Registros: "

  constructor(private datosserv: DatosService) {

  }
}
