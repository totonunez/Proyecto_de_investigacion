import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  API_URI = 'http://localhost:3000'

  constructor() { }
}
