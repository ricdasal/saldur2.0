import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../app.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogProductoComponent } from './dialog-producto/dialog-producto.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos:Array<any> = [];
  productoFiltrado: Array<any> = [];

  lista_carrito: Array<any> = [];
  lista_muestra: Array<any> = [];

  generar_pedido: boolean =  true;
  generado: boolean = true;
  mostrarTabla: boolean = false;

  constructor(app:AppComponent, public dialog: MatDialog) {
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
  generar1(): void {
    this.generar_pedido = true;
    this.mostrarTabla = true;

  }

  cargarProductos(): void {
    fetch("http://localhost:8080/items")
    .then(response => response.json())
    .then(productos => {
     
      this.productos =  productos;
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

  getProducto(producto: any):void {
    const dialogRef = this.dialog.open(DialogProductoComponent, {
      width: '500px',
      data: {producto: producto, carrito: this.lista_carrito},
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  mostrarPedido(){
    this.lista_muestra = [];
    this.lista_carrito.forEach(item =>{
      this.lista_muestra.push(item)
    })
    

  }

}
