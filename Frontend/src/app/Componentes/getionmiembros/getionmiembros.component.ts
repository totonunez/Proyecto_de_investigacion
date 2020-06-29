import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Gestionmiembros } from '../../services/gestionmiembros.service'
import { userandjpid } from '../../models/IDJPIDuser'
import { userandproyecto } from '../../models/userandproyeccto'
import { Invproyecto } from '../../models/invproyecto'

@Component({
  selector: 'app-getionmiembros',
  templateUrl: './getionmiembros.component.html',
  styleUrls: ['./getionmiembros.component.sass']
})
export class GetionmiembrosComponent implements OnInit {

  response: any = []; 
  JPandpermiso: any =[];
  usuario: userandjpid = {
    users_User_ID: null,
    Proyecto_Proy_ID: null
  }
  useryproyec: userandproyecto = {
    Proyecto_Proy_ID: null,
    Usuario: null
  }
  invtuser:Invproyecto = {
    Fecha: '2020-06-25',
    Estado: 'En espera',
    Proyecto_Proy_ID: null,
    users_User_ID: null
  }
  Grupo_ID : any;
  constructor(private gestionMiembros: Gestionmiembros, private _route :ActivatedRoute) {
    this.Grupo_ID = this._route.snapshot.paramMap.get('Grupo_ID')
    console.log(this.Grupo_ID);
   }

  ngOnInit(): void {
  }
  

  RetornarJP(): void{
    this.gestionMiembros.retornarsiesjp(this.usuario).subscribe(
      res => {
        this.JPandpermiso = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  invitarmiembro(): void{
    this.invtuser.Proyecto_Proy_ID = this.useryproyec.Proyecto_Proy_ID
    this.gestionMiembros.Get_UserID(this.useryproyec).subscribe(
      res => {
        this.invtuser.users_User_ID = res[0].User_ID;
        this.gestionMiembros.Invmiemb(this.invtuser).subscribe(
          res => {
            console.log(res);
          },
          err => console.log(err)
        )
      },
      err => console.log(err)
    )
  }
}