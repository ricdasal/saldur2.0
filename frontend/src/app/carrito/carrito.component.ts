import { Component, OnInit, Inject, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogProductoComponent } from './dialog-producto/dialog-producto.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  //identificacion del pedido
  @Input() counter: number = 0;
  
  //lee los productos desde el backend
  productos:Array<any> = [];
  productoFiltrado: Array<any> = [];

  //guardado de datos temporales del pedido.
  lista_carrito: Array<any> = [];
  lista_muestra: Array<any> = [];

  //booleans para mostrar o quitar componentes.
  generar_pedido: boolean =  true;
  generado: boolean = true;
  mostrarTabla: boolean = false;
  mostrarForm: boolean = false;
  btnGuardado: boolean = false;
  btnSiguiente: boolean = false;

  constructor(app:AppComponent, public dialog: MatDialog, private http: HttpClient) {
    app.showNav = false;
    app.showFoot = false; 
   }

  ngOnInit(): void {
    this.cargarProductos();
    
  }

  //aparecer o desaparecer componentes
  generar(): void{
    this.generar_pedido = false;
    this.generado = false;
  }
  generar1(): void {
    this.generar_pedido = true;
    this.mostrarTabla = true;
    this.btnGuardado = true;
    this.btnSiguiente = true;

  }
  generarForm(){
    this.mostrarForm = true;
    this.btnSiguiente = false;
  }

  ocultarForm(){
    this.mostrarForm = false;
  }

  btnOff(){
    this.btnGuardado = false;
    

  }


  //carga los elementos desde el backend.
  cargarProductos(): void {
    fetch("http://localhost:8080/items")
    .then(response => response.json())
    .then(productos => {
     
      this.productos =  productos;
      this.productoFiltrado = this.productos;
    })
    .catch(console.error);

  }

  cargarContador(){
    fetch("http://localhost:8080/lista_pedidos")
    .then(response => response.json())
    .then(pedidos => {
      this.counter = pedidos.length + 1

    })
    .catch(console.error);
  }

  //realiza filtrado
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

  //genera la ventana desde la cual se selecciona la cantidad del producto.
  getProducto(producto: any):void {
    const dialogRef = this.dialog.open(DialogProductoComponent, {
      width: '500px',
      data: {producto: producto, carrito: this.lista_carrito},
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  //llena la tabla de los pedidos
  mostrarPedido(){
    this.lista_muestra = [];
    this.lista_carrito.forEach(item =>{
      this.lista_muestra.push(item)
    })
    

  }

  //google maps

  //posicion inicial del mapa
  display: any;
    center: google.maps.LatLngLiteral = {
        lat: -2.1998351891432355,
        lng:  -79.89826449946624
    };
    zoom = 15;
    @Input() markerOptions: google.maps.MarkerOptions = {
      draggable: false
    };
  @Input() markerPositions: google.maps.LatLngLiteral = {
        lat: -2.1998351891432355,
        lng:  -79.89826449946624
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions = event.latLng.toJSON();
    this.posInicial = String(this.markerPositions.lat);
    this.posFinal = String(this.markerPositions.lng);
    this.posicion = '';
    this.posicion = this.posInicial.concat(";");
    this.posicionR = this.posicion.concat(this.posFinal);
    console.log(this.posFinal);

  }


  //manejo del formulario
  @Input() posInicial: string = String(this.markerPositions.lat);
  @Input() posFinal: string = String(this.markerPositions.lng);
  posicion: string = this.posInicial.concat(";");
  @Input() posicionR: string = this.posicion.concat(this.posFinal);

  @Input() estado: string = "en espera"




  //envio de datos de la lista de pedidos
  postId: number = 0;
  guardarDatos(){

    this.lista_muestra.forEach((c: any) => {
      console.log(c);
      this.http.post<any>('http://localhost:8080/item_pedidos', { id_pedido: this.counter, id_producto: c.product.id, cantidad: c.cantidad }).subscribe(data => {
            this.postId = data.id;
        })
    })

  }
}