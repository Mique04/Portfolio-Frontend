import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModoEdicionService {

  constructor() { }

  edicion_activada = false;
  activarEdicion() {
    this.edicion_activada = true;
  }
  DesactivarEdicion() {
    this.edicion_activada = false;
  }

  EmpezarEditar = false;
  Editar() {
    if (this.edicion_activada){
    this.EmpezarEditar = true;
    }
  }
  NoEditar() {
    this.EmpezarEditar = false;
  }

  cambiar_parrafo() {
    const input_edit = document.querySelectorAll(".input-edit");
    const elem_edit = document.querySelectorAll(".elem-edit");
    input_edit.forEach((element) => {
      (element as HTMLElement).style.display = 'inline';
    });
    elem_edit.forEach((element) => {
      (element as HTMLElement).innerText = '';
    });
    console.log(elem_edit);
  }

  NoCambiar_parrafo() {
    const input_edit = document.querySelectorAll(".input-edit");
    input_edit.forEach((element) => {
      (element as HTMLElement).style.display = 'none';
    });
    console.log(this.EmpezarEditar)
  }

  VolverNormalidad(texto: string) {
    const input_edit = document.querySelectorAll(".input-edit");
    const elem_edit = document.querySelectorAll(".elem-edit");
    input_edit.forEach((element) => {
      (element as HTMLElement).style.display = 'none';
    });
    elem_edit.forEach((element) => {
      (element as HTMLElement).innerHTML = texto;
    });
    console.log(elem_edit);
  }
  

   ConvertirValor(valor: NodeListOf<Element>): void {
    const input_edit = document.querySelectorAll(".input-edit");
    const elem_edit = document.querySelectorAll(".elem-edit");
  
    input_edit.forEach((element, index) => {
      (element as HTMLElement).addEventListener('input', () => {
        const valor = (element as HTMLInputElement).value;
        (elem_edit[index] as HTMLElement).innerText = valor;
      });
    });
  }
}
