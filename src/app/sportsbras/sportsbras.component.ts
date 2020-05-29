import { Component, OnInit } from '@angular/core';
import { Sportsbras } from './model/models';

@Component({
  selector: 'app-sportsbras',
  templateUrl: './sportsbras.component.html',
  styleUrls: ['./sportsbras.component.css']
})
export class SportsbrasComponent implements OnInit {

    sportsbras: Sportsbras[] = [];


  constructor() {
    this.sportsbras = [
      { name:"Adapt Marl Seamless Sports Bra",description:" $45.00 ", photoUrl: "../../assets/clothes/photo22.png",color:"Light Blue"},
      { name:"Ultra Seamless Sports Bra",description:" $35.00 ", photoUrl: "../../assets/clothes/photo23.png",color:"Orange"},
      { name:"Technical Sports Bra",description:" $50.00 ", photoUrl: "../../assets/clothes/photo24.png",color:"Black"},
      { name:"Energy+Seamless Sports Bra",description:" $35.00 ", photoUrl: "../../assets/clothes/photo25.png",color:"Black"},
      { name:"Zip Up Trainging Sports Bra",description:" $30.00 ", photoUrl: "../../assets/clothes/photo26.png",color:"Black"},
      { name:"Adapt Animal Seamless Sports Bra",description:" $45.00 ", photoUrl: "../../assets/clothes/photo27.png",color:"Black"},
    ];
   }



  ngOnInit() {
  }

}