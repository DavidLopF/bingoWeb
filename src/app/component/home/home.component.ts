import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


interface GameMode {
  name: string;
  id: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedValue: number;


  gameModes: GameMode[]

  constructor(private toastr: ToastrService) {

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
    ]

    this.selectedValue = this.gameModes[0].id;

  }

  ngOnInit(): void {
  }

  changeOption(valor: number) {
    console.log(valor);
    this.selectedValue = valor;
  }

  selectMode(){
    if(this.selectedValue == this.gameModes[0].id){
      this.toastr.warning('Selecciona un modo de juego', 'Alerta');
      return;
    }

    this.toastr.success('Modo de juego seleccionado', 'Correcto');
    window.location.href = '/bingo?mode=' + this.selectedValue;

  }

}
