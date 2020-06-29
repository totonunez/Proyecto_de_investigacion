import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
User_ID : any;
  constructor(private _route :ActivatedRoute , private router:Router) {
    this.User_ID = this._route.snapshot.paramMap.get('User_ID')
    console.log(this.User_ID);
  }

  ngOnInit(): void {
  }
  entrarGrupos(): void{
    
    this.router.navigate([+localStorage.getItem("User_ID"),'grupos' ])
    
  }

}
