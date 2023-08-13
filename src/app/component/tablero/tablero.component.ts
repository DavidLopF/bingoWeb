import { Component, Input, OnInit } from '@angular/core';

interface balotas {
  numero: number;
  estado: boolean;
  letra: string;
}

interface GameMode {
  name: string;
  id: number;
}

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  balotas: balotas[] = [];
  letters: string[] = [];

  @Input() gameMode: any;

  constructor() {
    for (let i = 1; i <= 75; i++) {
      this.balotas.push({ numero: i, estado: false, letra: this.getLetter(i) });
    }

    this.letters = ['B', 'I', 'N', 'G', 'O'];


  }

  printBalotas() {
    const b = document.getElementById('b');
    const i = document.getElementById('i');
    const n = document.getElementById('n');
    const g = document.getElementById('g');
    const o = document.getElementById('o');
    const style = `style="border-radius: 200%;background-color: yellow; style="border: 1px solid black;"`;
    const classBalota = `class="balota center-align"`;
    this.balotas.forEach(balota => {
      if (b  && i && n && g && o) {
        if (balota.numero >= 1 && balota.numero <= 15) {
          b.innerHTML += `<td ${classBalota} ${style} >${balota.numero}</td>`
        }
        if (balota.numero >= 16 && balota.numero <= 30) {
          i.innerHTML += `<td ${classBalota} ${style}>${balota.numero}</td>`
        }
        if (balota.numero >= 31 && balota.numero <= 45) {
          n.innerHTML += `<td ${classBalota} ${style}>${balota.numero}</td>`
        }
        if (balota.numero >= 46 && balota.numero <= 60) {
          g.innerHTML += `<td ${classBalota} ${style}>${balota.numero}</td>`
        }
        if (balota.numero >= 61 && balota.numero <= 75) {
          o.innerHTML += `<td ${classBalota} ${style}>${balota.numero}</td>`
        }
      }
    });
  }

  getLetter(number: number): string {
    if (number >= 1 && number <= 15) {
      return 'B';
    }
    if (number >= 16 && number <= 30) {
      return 'I';
    }
    if (number >= 31 && number <= 45) {
      return 'N';
    }
    if (number >= 46 && number <= 60) {
      return 'G';
    }
    if (number >= 61 && number <= 75) {
      return 'O';
    }
    return '';
  }

  ngOnInit(): void {

    this.printBalotas();
    console.log(this.balotas);


  }

}
