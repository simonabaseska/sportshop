import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sportshop';

  onClick(id: string): void {
    const el: HTMLElement|null = document.getElementById(id);
    if (el) {
      setTimeout(() =>
        el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'}), 0);
    }
  }

  shorts_flag: boolean = true;
  sportsbras_flag: boolean = false;
  leggings_flag: boolean = false;
  hoodies_flag: boolean = false;
  
  setShorts(){
    this.shorts_flag = true;
    this.sportsbras_flag = false;
    this.leggings_flag = false;
    this.hoodies_flag = false;
  }

  setSportsbras(){
    this.shorts_flag = false;
    this.sportsbras_flag = true;
    this.hoodies_flag = false;
    this.leggings_flag = false;
  }

  setHoodies(){
    this.shorts_flag = false;
    this.sportsbras_flag = false;
    this.hoodies_flag = true;
    this.leggings_flag = false;
  }

  setLeggings(){
    this.shorts_flag = false;
    this.sportsbras_flag = false;
    this.hoodies_flag = false;
    this.leggings_flag = true;
  }

  };