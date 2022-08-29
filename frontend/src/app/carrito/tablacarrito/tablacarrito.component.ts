import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablacarrito',
  templateUrl: './tablacarrito.component.html',
  styleUrls: ['./tablacarrito.component.css']
})
export class TablacarritoComponent implements OnInit {
  listas:Array<any> = [];
  lista_items:Array<any> = [];
  mostrarTabla:boolean = true;

  constructor() { }

  ngOnInit(): void {

    fetch("http://localhost:3000/pedidos")
    .then(response => response.json())
    .then(listas => {
      this.listas = listas 
    })

  }

  obtenerItems(id_pedido:string){
    this.mostrarTabla = false;
    fetch("http://localhost:3000/item_pedidos/" + id_pedido)
    .then(response => response.json())
    .then(listas => {
      this.lista_items = listas; 
    })
    for(let item of this.lista_items){
      fetch("http://localhost:3000/productos/" + item.id_producto)
      .then(response => response.json())
      .then(listas => {
        item.id_producto = listas[0].nombre;
      })
    } 
  }




  

}
