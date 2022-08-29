import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos:Array<any> = [];
  productoFiltrado: Array<any> = [];

  generar_pedido: boolean =  true;
  generado: boolean = true;
  constructor(app:AppComponent) {
    app.showNav = false;
    app.showFoot = false; 
   }

  ngOnInit(): void {
    this.cargarProductos();
  }

  generar(): void{
    this.generar_pedido = false;
    this.generado = false;
  }

  cargarProductos(): void {
    fetch("assets/databases/data.json")
    .then(response => response.json())
    .then(productos => {
     
      this.productos =  productos.productos;
      this.productoFiltrado = this.productos;
    })
    .catch(console.error);

  }

  filtroCaneca(): void {
    this.productoFiltrado = []
    for(let producto of this.productos){
      if(producto.imagen.includes('Caneca')){
        this.productoFiltrado.push(producto);
      }
      
    }
  }

  filtroTanque(): void {
    this.productoFiltrado = [];
    for(let producto of this.productos){
      if(producto.imagen.includes('Tanque')){
        this.productoFiltrado.push(producto);
      }
     
    }

  }
}
