import { Component, OnInit } from '@angular/core';
import { TableroComponent } from '../tablero/tablero.component';


interface GameMode {
  name: string;
  id: number;
}

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.css']
})
export class BingoComponent implements OnInit {

  gameModes: GameMode[]
  selectedValue: GameMode | undefined;

  constructor() {

    this.gameModes = [
      { name: 'Selecciona un modo de juego', id: 0 },
      { name: 'Completo', id: 1 },
      { name: 'Solo esquinas', id: 2 },
      { name: 'Solo centro', id: 3 },
      { name: 'Solo esquinas y centro', id: 4 },
      { name: 'L', id: 5 },
      { name: 'T', id: 6 },
      { name: 'B', id: 7 },
      { name: 'X', id: 8 },
      { name: 'Cruz', id: 9 },
      { name: 'Cuadrado', id: 10 },
      { name: 'U', id: 11 },
    ]

    //tomar el parametro de la url
    const queryString = window.location.search.split('=')[1];
    this.selectedValue = this.gameModes.find(x => x.id == parseInt(queryString));

    
   }

  ngOnInit(): void {
  }

}
