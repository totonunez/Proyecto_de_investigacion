import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProyectoService } from '../../services/proyecto.service';
import { proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.sass']
})

export class ProyectoComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  response: any = [];

  datos: proyecto = {
    Proy_ID : null,
    Nombre : null,
    Descripcion : null,
    Estado : null
  }
  
  edit: boolean = false;

  constructor(private ProyectoData : ProyectoService,  private router: Router , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.ProyectoData.getProyecto(params.id).subscribe(
          res => {
            console.log(res);
            this.datos = res;
            localStorage.setItem('Proy_ID', JSON.stringify(res[0].Proy_ID));
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }
}
