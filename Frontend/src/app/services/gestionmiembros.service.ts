import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { userandjpid } from '../models/IDJPIDuser';

@Injectable({
  providedIn: 'root'
})
export class Gestionmiembros {
  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) {

   }
  /* ejemplo de service
   getBuscarPacienteAPI(id:string){//buscar paciente por rut
    return this.http.get(`${this.API_URI}/paciente/${id}`);//son backtick de jav `` alt+parentecis
  }
  getGames() {
    return this.http.get(`${this.API_URI}/games`);
  }

  getGame(id: string) {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  saveGame(game: Game) {
    return this.http.post(`${this.API_URI}/games`, game);
  }

  updateGame(id: string|number, updatedGame: Game): Observable<Game> {
    return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
  }

  */
  retornarsiesjp(ids: userandjpid){
    return this.http.post(`${this.API_URI}/mienbros_proyectos/privilegiojp`, ids)
  }
  getGame(username: string) {
    return this.http.get(`${this.API_URI}/games/${username}`);
  }
}