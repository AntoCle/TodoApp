import { ISottolista } from "./isottolista";

export interface ILista {
  nome: string;
  sottoliste: ISottolista[];
  showInput: boolean;
  nomeSottolista: string;
}
