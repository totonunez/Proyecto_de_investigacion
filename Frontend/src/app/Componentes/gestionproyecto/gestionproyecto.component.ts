import { Component, OnInit,  Input , HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { gestionproyectoservice } from '../../services/gestionproyecto.service';
import { cambionombre } from '../../models/cambionombre';
import { cambiodescripcion } from '../../models/cambiodescripcion';
import { cambioestado } from '../../models/cambioestado';

@Component({
  selector: 'app-gestionproyecto',
  templateUrl: './gestionproyecto.component.html',
  styleUrls: ['./gestionproyecto.component.sass']
})
export class GestionproyectoComponent implements OnInit {

  response: any = [];
  Proy_ID : number;
  cnombre: cambionombre = {
    Nombre : null,
    Proy_ID : this.Proy_ID,
  }
  cdescripcion: cambiodescripcion = {
    Descripcion : null,
    Proy_ID : this.Proy_ID,
  } 
  cestado: cambioestado = {
    Estado : null,
    Proy_ID : this.Proy_ID,
    
  }
  edit: boolean = false;

  constructor(private ProyectoCambio : gestionproyectoservice, private router: Router , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.Proy_ID = params.id;
      this.edit = true;
    }
  }

  ModificarNombre(): void{
    this.cnombre.Proy_ID = Number(this.Proy_ID)
    this.cnombre.Nombre = this.cnombre.Nombre.toString()
    console.log(this.cnombre)
    this.ProyectoCambio.CambiarNombre(this.cnombre).subscribe(res => console.log(res),req => console.log(req))
  }
  ModificarDescripcion(): void{
    this.ProyectoCambio.CambiarDescripcion(this.cdescripcion)
  }
  ModificarEstado(): void{
    this.ProyectoCambio.CambiarEstado(this.cestado)
  }
}

