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
  
  
  constructor() { }

  ngOnInit(): void {
    

  }
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
}


}
