import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { IndexComponent } from './index/index.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ProductosComponent } from './productos/productos.component';
import { DevelopersComponent } from './developers/developers.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GraficasComponent } from './graficas/graficas.component';
import { AdministratorComponent } from './usersModules/administrator/administrator.component';
import { ClienteComponent } from './usersModules/cliente/cliente.component';
import { CarritoComponent } from './carrito/carrito.component';
import { TablacarritoComponent } from './carrito/tablacarrito/tablacarrito.component';
//import { PerfilComponent } from './usersModules/cliente/perfil/perfil.component';
//import { ListaComponent } from './usersModules/cliente/lista/lista.component';
//import { ListaProductosComponent } from './usersModules/cliente/lista-productos/lista-productos.component';


const routes: Routes = [
  {path:'index', component:IndexComponent },
  {path: 'productos', component:ProductosComponent},
  {path:'', redirectTo:'/index', pathMatch:'full'},
  {path:'noticias', component: NoticiasComponent},
  {path: 'developers', component: DevelopersComponent},
  {path: 'contactenos', component: ContactenosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'grafica', component: GraficasComponent},
  {path: 'admin/:id', component: AdministratorComponent},
  {path: 'user/:id', component: ClienteComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'carrito/pedido', component: TablacarritoComponent}
  //{path:'user/perfil', component:PerfilComponent}
  //{path:'user/lista', component:ListaComponent},
  //{path:'user/listas', component:ListaProductosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      onSameUrlNavigation: "ignore",
      anchorScrolling:'enabled',
      scrollPositionRestoration: 'enabled'}),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
