import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Observable, Observer } from 'rxjs';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(readonly heroSerivce : HeroService, private message: MessageService, private router: Router) {}

  heros: any = [{
    id: 1
  },{
    id: 2
  }];

  a: any;

  ngOnInit(): void {
    let temp = this;
    this.heroSerivce.getHero().subscribe({
      next: (data: string) => {
        if(data) {
          console.log(temp);
          console.log(this);
          // temp.heros = data;
        }
      }
    })
  }

  openDetails(hero: any): void {
    this.router.navigate(['/herodetails/'+`${hero.id}`]);
  }
  

}
export interface Hero {
  id: number;
  name: string;
}
