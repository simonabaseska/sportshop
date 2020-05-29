import { Component, OnInit } from '@angular/core';
import { Leggings } from './model/models';

@Component({
  selector: 'app-leggings',
  templateUrl: './leggings.component.html',
  styleUrls: ['./leggings.component.css']
})
export class LeggingsComponent implements OnInit {

  leggings: Leggings[] = [];

  constructor() {

    this.leggings = [
      { name:"Vital Seamless Leggings",description:" $50.00 ", photoUrl: "../../assets/clothes/photo4.png",color:"Pink Marl"},
      { name:"Camo Seamless Leggings",description:" $60.00 ", photoUrl: "../../assets/clothes/photo5.png",color:"Black"},
      { name:"Flex Leggings",description:" $42.00 ", photoUrl: "../../assets/clothes/photo6.png",color:"Khaki/Sand"},
      { name:"Technical Leggings",description:" $65.00 ", photoUrl: "../../assets/clothes/photo7.png",color:"Black"},
      { name:"Fit Printed Leggings",description:" $40.00 ", photoUrl: "../../assets/clothes/photo8.png",color:"Blue"},
      { name:"Energy+SeamLess Leggings",description:" $55.00 ", photoUrl: "../../assets/clothes/photo9.png",color:"Tropical Blue"},
    ];
  }
  ngOnInit() {
  }

}
