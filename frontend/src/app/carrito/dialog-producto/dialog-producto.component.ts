import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators} from '@angular/forms';

export interface ItemPedido {
  product: any;
  cantidad: any;
}


@Component({
  selector: 'app-dialog-producto',
  templateUrl: './dialog-producto.component.html',
  styleUrls: ['./dialog-producto.component.css']
})
export class DialogProductoComponent implements OnInit {
  cantidad: string = '';


  constructor(
    public dialogRef: MatDialogRef<DialogProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {producto: any, carrito: any}, 
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  aceptar(carrito: any, producto: any):void{
    const item: ItemPedido = {
      product:  producto,
      cantidad: Number(this.cantidad)

    }
    carrito.push(item);
    console.log(producto);
  }
  ngOnInit(): void {
  }

}
