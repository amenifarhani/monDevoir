import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../core/player';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player:Player=new Player();
  constructor(private _PlayerService : PlayerService) { }

  ngOnInit(): void {
  }
  add(){
  
    this._PlayerService.Add(this.player).subscribe(()=>alert('Product Succefully added'))

 
}}
