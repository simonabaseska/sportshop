import { Component, OnInit } from '@angular/core';
import { Shorts} from './model/models';

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})
export class ShortsComponent implements OnInit {
  shorts: Shorts[] = [];

  constructor() {
    this.shorts = [
      { name:"Fit Cycling Shorts",description:" $30.00 ", photoUrl: "../../assets/clothes/photo10.png",color:"Berry Red/Pink"},
      { name:"Flex Cycling Shorts",description:" $40.00 ", photoUrl: "../../assets/clothes/photo11.png",color:"Khaki Marl/Taupe"},
      { name:"Training Short Lenght Shorts",description:" $25.00 ", photoUrl: "../../assets/clothes/photo12.png",color:"Charcoal"},
      { name:"Training Loose Fit Shorts",description:" $25.00 ", photoUrl: "../../assets/clothes/photo13.png",color:"Black"},
      { name:"Technical Cycling Shorts",description:" $45.00 ", photoUrl: "../../assets/clothes/photo14.png",color:"Black"},
      { name:"Fit Cycling Shorts",description:" $30.00 ", photoUrl: "../../assets/clothes/photo15.png",color:"Charcoal/Pink"},
      { name:"Flec Cycling Shorts",description:" $40.00 ", photoUrl: "../../assets/clothes/photo16.png",color:"Berry Marl/Rose"},
      { name:"Training Loose Fit Shorts",description:" $25.00 ", photoUrl: "../../assets/clothes/photo17.png",color:"Red"},
      { name:"Fit Cycling Shorts",description:" $30.00 ", photoUrl: "../../assets/clothes/photo18.png",color:"Blue/Charcoal"},
      { name:"Training Loose Fit Shorts",description:" $25.00 ", photoUrl: "../../assets/clothes/photo19.png",color:"Smokey Grey"},
      { name:"Flex Cycling Shorts",description:" $40.00 ", photoUrl: "../../assets/clothes/photo20.png",color:"Grey/Teal"},
      { name:"Flex Cycling Shorts",description:" $40.00 ", photoUrl: "../../assets/clothes/photo21.png",color:"Black/Grey"}
    ];
   }



  ngOnInit() {
  }

}
