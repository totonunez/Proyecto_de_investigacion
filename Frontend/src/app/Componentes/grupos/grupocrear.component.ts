import { Component, OnInit } from '@angular/core';
import { GrupoCrearService } from '../../services/grupocrear.service'
import { tablagrupos } from '../../models/tablagrupos'

@Component({
  selector: 'app-grupocrear', 
  templateUrl: './grupocrear.component.html',
  styleUrls: ['./grupocrear.component.css']
})
export class GrupoCrearComponent implements OnInit {

  tablagrupos: tablagrupos = {
    Nombre: null,
    Descripcion: null,
    URL: null,
  }

  variab: any = [];


  constructor(private grupocrearservice: GrupoCrearService) { }

  ngOnInit(): void {
    console.log("Estoy funcionando!!!!")
  }

  CrearGrupo(): void{
    this.grupocrearservice.retornartablagrupos(this.tablagrupos).subscribe(
      res => {
        this.variab = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }



}
