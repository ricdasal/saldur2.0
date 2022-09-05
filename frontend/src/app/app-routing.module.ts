import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ReportePedidoComponent } from './carrito/reporte-pedido/reporte-pedido.component';
import { ListaCarritoComponent } from './carrito/lista-carrito/lista-carrito.component';

const routes: Routes = [
  {path:'index', component:IndexComponent },
  {path:'', redirectTo:'/index', pathMatch:'full'},
  {path: 'productos', component:ProductosComponent},
  {path: 'carrito', component:CarritoComponent},
  {path: 'pedidos', component:ReportePedidoComponent},
  {path: 'carrito/lista', component:ListaCarritoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      onSameUrlNavigation: "ignore",
      anchorScrolling:'enabled',
      scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
