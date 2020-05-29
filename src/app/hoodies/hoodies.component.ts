import { Component, OnInit } from '@angular/core';
import { Hoodies } from './model/models';

@Component({
  selector: 'app-hoodies',
  templateUrl: './hoodies.component.html',
  styleUrls: ['./hoodies.component.css']
})
export class HoodiesComponent implements OnInit {

    hoodies: Hoodies[] = [];

  constructor() {
    
    this.hoodies = [
      { name:"Combat Sleeveless Hoodie",description:" $45.00 ", photoUrl: "../../assets/clothes/photo1.png",color:"Smokey Grey Marl"},
      { name:"Training Hoodie",description:" $40.00 ", photoUrl: "../../assets/clothes/photo2.png",color:"Teal"},
      { name:"Training Cropped Hoodie",description:" $35.00 ", photoUrl: "../../assets/clothes/photo3.png",color:"Light Blue"},
    ];
   }
  ngOnInit() {
  }

}
