import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte-pedido',
  templateUrl: './reporte-pedido.component.html',
  styleUrls: ['./reporte-pedido.component.css']
})
export class ReportePedidoComponent implements OnInit {
  listas:Array<any> = [];
  lista_items:Array<any> = [];
  mostrarTabla:boolean = true;
 

  constructor() {
  }


  ngOnInit(): void {
    fetch("http://localhost:8080/pedidos")
    .then(response => response.json())
    .then(listas => {
      this.listas = listas 
    })

    

    

  }

  obtenerItems(id_pedido:string){
    this.mostrarTabla = false;
    fetch("http://localhost:8080/item_pedidos" + id_pedido)
    .then(response => response.json())
    .then(listas => {
      this.lista_items = listas; 
    })
    for(let item of this.lista_items){
      fetch("http://localhost:8080/items" + item.id_producto)
      .then(response => response.json())
      .then(listas => {
        item.id_producto = listas[0].nombre;
      })
    } 
  }
  

}
