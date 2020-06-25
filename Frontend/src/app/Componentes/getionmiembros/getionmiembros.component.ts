import { Component, OnInit } from '@angular/core';

import { Gestionmiembros } from '../../services/gestionmiembros.service'
import { userandjpid } from '../../models/IDJPIDuser'

@Component({
  selector: 'app-getionmiembros',
  templateUrl: './getionmiembros.component.html',
  styleUrls: ['./getionmiembros.component.sass']
})
export class GetionmiembrosComponent implements OnInit {

  JPandpermiso: any =[];
  usuario: userandjpid = {
    users_User_ID: 1,
    Proyecto_Proy_ID: 1
  }
  useryproyec: any = {
    
  }

  constructor(private gestionMiembros: Gestionmiembros) { }

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
    this.gestionMiembros.retornarsiesjp(this.usuario).subscribe(
      res => {
        this.JPandpermiso = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }
}