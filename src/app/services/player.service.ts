import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Player } from '../core/player';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  url:string =environment.apiUrl+"player";

  constructor(private http:HttpClient) {}

Add(player:Player){
return this.http.post(this.url,player)


}

   }
  
