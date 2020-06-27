import { Component, OnInit } from '@angular/core';
import {GruposService} from '../../services/grupos.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.sass']
})
export class GruposComponent implements OnInit {
  grupos : any = [ ]
  //tablaGrupos: tablaGrupos = {
    //nombre: null,                 //?:obligatorio 
    //descripcion: null, 
    //url:null 
  //}
  
  constructor(private gruposServices : GruposService, private router: Router ) { }

  ngOnInit(): void {
    //funciones 

    this.gruposServices.retornarTablaGrupos().subscribe(

      res => {
        this.grupos = res;
        console.log(res)
      },
      err => console.error(err)
      
    )

  }

}
