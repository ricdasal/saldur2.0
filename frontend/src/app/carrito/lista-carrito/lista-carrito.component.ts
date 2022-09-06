import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-carrito',
  templateUrl: './lista-carrito.component.html',
  styleUrls: ['./lista-carrito.component.css']
})
export class ListaCarritoComponent implements OnInit {
  lista_carrito: Array<any> = [];
  lista_markers: Array<google.maps.Marker> = []
 
  display: any;
    center: google.maps.LatLngLiteral = {
        lat: -2.1998351891432355,
        lng:  -79.89826449946624
    };
    zoom = 15;
    markerOptions: google.maps.MarkerOptions = {
      draggable: false
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }
  
  
  constructor() {}

  ngOnInit(): void {
    this.cargarPedidos();
    

  }
//   addMarker(event: google.maps.MapMouseEvent) {
//     if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
// }


cargarPedidos(){
  fetch("http://localhost:8080/lista_pedidos")
    .then(response => response.json())
    .then(pedidos => {
      pedidos.forEach((C:any) => {
        const minilist = C.direccion.split(";");
        console.log(minilist)
        var chicago = {lat: Number(minilist[0]), lng: Number(minilist[1])};
        this.markerPositions.push(chicago)


      });
      
    })
    .catch(console.error);
}

iniciarMarkers(){
  this.lista_carrito.forEach((C:any) => {
    const minilist = C.direccion.split();
    // const marker = new google.maps.Marker({
    //   // The below line is equivalent to writing:
    //   // position: new google.maps.LatLng(-34.397, 150.644)
    //   position: { lat: Number(minilist[0]), lng: Number(minilist[1]) }
    // });
    // this.lista_markers.push(marker);
    var chicago = {lat: Number(minilist[0]), lng: Number(minilist[1])};
    this.markerPositions.push(chicago)




  })
}
}
