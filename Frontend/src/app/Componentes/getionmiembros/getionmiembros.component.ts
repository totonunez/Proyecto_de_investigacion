import { Component, OnInit } from '@angular/core';

import { Gestionmiembros } from '../../services/gestionmiembros.service'
import { userandjpid } from '../../models/IDJPIDuser'
import { userandproyecto , userandproyectoID ,userIDnoJP, cambiarprivilegio } from '../../models/userandproyeccto'
import { Invproyecto } from '../../models/invproyecto'

@Component({
  selector: 'app-getionmiembros',
  templateUrl: './getionmiembros.component.html',
  styleUrls: ['./getionmiembros.component.sass']
})
export class GetionmiembrosComponent implements OnInit {

  actualJP_ID: number;
  actualProyecto_ID: number;
  response: string; 
  JPandpermiso: any =[];
  userlist: any =[];
  usernojplist: any =[];
  usuario: userandjpid = {
    users_User_ID: null,
    Proyecto_Proy_ID: null
  }
  useryproyec: userandproyecto = {
    Proyecto_Proy_ID: null,
    Email: null
  }
  cambiarpriv: cambiarprivilegio = {
    users_User_ID_JP: 1,
    users_User_ID: null,
    Proyecto_Proy_ID: null
  }
  useryproyecID: userandproyectoID = {
    users_User_ID: null,
    Proyecto_Proy_ID: null
  }
  useridnojp: userIDnoJP = {
    Proyecto_Proy_ID: 1,
    JP: 0
  }
  invtuser:Invproyecto = {
    Fecha: '2020-06-25',
    Estado: 'En espera',
    Proyecto_Proy_ID: null,
    users_User_ID: null
  }

  constructor(private gestionMiembros: Gestionmiembros) { }

  ngOnInit(): void {
    this.gestionMiembros.Get_listmemberIDnoJP(this.useridnojp).subscribe(
      res => {
        this.usernojplist = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }
  
  recuperardatos(Proyecto_ID: number,JP_ID: number): void {
    this.actualProyecto_ID = Proyecto_ID;
    this.actualJP_ID = JP_ID;
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

  eliminarmienbro(): void{
    this.gestionMiembros.Eliminarmember(this.useryproyecID).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }

  cambiarJP(): void{
    if(confirm('Estas seguro de querer cambiar de Jefe de Proyecto?')){
      console.log(this.cambiarpriv)
      this.gestionMiembros.cambiarprivilegios(this.cambiarpriv).subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
    }
  }
}