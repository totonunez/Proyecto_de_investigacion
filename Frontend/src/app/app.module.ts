import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { LoginComponent } from './Componentes/login/login.component';
import { HomeComponent } from './Componentes/home/home.component';


import { ViajesComponent } from './Componentes/viajes/viajes.component';
import { ViajesFromComponent } from './Componentes/viajes-from/viajes-from.component';

<<<<<<< HEAD
//services
import { ViajesService } from './services/viajes.service';
import { ProyectoComponent } from './proyecto/proyecto.component';
=======
import { PresentacionesComponent } from './Componentes/presentaciones/presentaciones.component';
import { PresentacionesFormComponent } from './Componentes/presentaciones-form/presentaciones-form.component';
import { ReportesComponent } from './Componentes/reportes/reportes.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
>>>>>>> 07da7606e6d7dea1e7ecfa00a61532117752ac8b

import { GetionmiembrosComponent } from './Componentes/getionmiembros/getionmiembros.component';
import { ProyectoComponent } from './Componentes/Proyecto/Proyecto.component';
import { GestionproyectoComponent } from './Componentes/gestionproyecto/gestionproyecto.component';

//servicios
import { ViajesService } from './services/viajes.service';
import {PresentacionesService} from './services/presentaciones.service';
import { Gestionmiembros } from './services/gestionmiembros.service';
import { gestionproyectoservice } from './services/gestionproyecto.service';
import { ProyectoService } from './services/proyecto.service';
import { InvitacionComponent } from './Componentes/invitacion/invitacion.component';
import { ReunionesComponent } from './Componentes/reuniones/reuniones.component';
import {ReunionesService} from './services/reuniones.service'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    HomeComponent,
    ViajesComponent,
    ViajesFromComponent,
<<<<<<< HEAD
    ReportesComponent,
    ProyectoComponent
=======
    PresentacionesComponent,
    PresentacionesFormComponent,
    ReportesComponent,
    GetionmiembrosComponent,
    ProyectoComponent,
    GestionproyectoComponent,
    InvitacionComponent,
<<<<<<< HEAD
    ReunionesComponent,
=======
>>>>>>> 07da7606e6d7dea1e7ecfa00a61532117752ac8b
>>>>>>> 1f2db47cc125f23f520db80205634fbaa39bfc01
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    ViajesService,
    PresentacionesService,
    Gestionmiembros,
    gestionproyectoservice,
    ProyectoService,
    ReunionesService
  ],
    
  bootstrap: [AppComponent],
  
})
export class AppModule { }
