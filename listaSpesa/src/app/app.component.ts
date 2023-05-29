import { Component } from '@angular/core';
import { ILista } from './interfaces/ilista';
import { ISottolista } from './interfaces/isottolista';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nomeLista: string = "";
  liste: ILista[] = [];

  creaLista() {
    const nuovaLista: ILista = {
      nome: this.nomeLista,
      sottoliste: [],
      showInput: false,
      nomeSottolista: ""
    };
    this.liste.push(nuovaLista);
    this.nomeLista = '';
  }

  aggiungiSottolista(lista: ILista) {
    const nuovaSottolista: ISottolista = {
      nome: lista.nomeSottolista
    };
    lista.sottoliste.push(nuovaSottolista);
    lista.nomeSottolista = '';
  }

  cancellaLista(index: number) {
    this.liste.splice(index, 1);
  }

  cancellaSottolista(lista: ILista, index: number) {
    lista.sottoliste.splice(index, 1);
  }

  toggleInput(index: number) {
    this.liste[index].showInput = !this.liste[index].showInput;
  }
}
