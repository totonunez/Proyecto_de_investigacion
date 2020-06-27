import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
//import {GestionGruposService} from '../../services/gestion-grupos.service';
@Component({
  selector: 'app-gestion-grupos',
  templateUrl: './gestion-grupos.component.html',
  styleUrls: ['./gestion-grupos.component.sass']
})
export class GestionGruposComponent implements OnInit {
  grupo : { Grupo_ID : any };
  constructor(private rutaActiva: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.grupo = {
      Grupo_ID: this.rutaActiva.snapshot.params.get('Grupo_ID')
    };
  }

  

}
