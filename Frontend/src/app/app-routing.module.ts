import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { LoginComponent } from './Componentes/login/login.component';
import { HomeComponent } from './Componentes/home/home.component';
import { ViajesComponent } from './Componentes/viajes/viajes.component';
import { ViajesFromComponent } from './Componentes/viajes-from/viajes-from.component';
import { GetionmiembrosComponent } from './Componentes/getionmiembros/getionmiembros.component';
import { GrupoCrearComponent}  from './Componentes/grupos/grupocrear.component'
import { GrupoMiembroComponent } from './Componentes/gruposmiembros/grupomiembros.component';
import { GruposComponent } from './Componentes/grupos-list/grupos.component';
import { GestionGruposComponent } from './Componentes/gestion-grupos/gestion-grupos.component';
import { GrupoEliminarComponent } from './Componentes/gruposeliminar/grupoeliminar.component';
import { GrupoVerComponent } from './Componentes/grupover/grupover.component';
import { GrupoListMiembrosComponent } from './Componentes/grupolistmiembros/grupolistmiembros.component';

const routes: Routes = [
  { path:"",
    component:InicioComponent
  },
  { path:"proyecto/miembros/gestion",
    component:GetionmiembrosComponent
  },
  {
    path:"login",
    component:LoginComponent
  },  
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"viajes",
    component:ViajesComponent
  },
  {
    path:"viajes/create",
    component:ViajesFromComponent
  },
  {
    path:"grupos/crear",
    component:GrupoCrearComponent
  },
  {
    path:"grupos/grupo/miembros/agregar",
    component:GrupoMiembroComponent
  },
  {
    path:"grupos",
    component:GruposComponent},
  {
    path:"grupos/gestion/:Grupo_ID",
    component:GestionGruposComponent
  },
  {
    path:"grupos/grupo/eliminar/:Grupo_ID",
    component:GrupoEliminarComponent
  },
  {
    path:"grupos/grupo/:Grupo_ID",
    component:GrupoVerComponent
  },
  {
    path:"grupo/miembros/:Grupo_ID",
    component:GrupoListMiembrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
