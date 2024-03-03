import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  
  id: any = 0;
  heros = [{
    id: 1, name: 'hero1'
  }, { id: 2, name: 'hero2' }];
  hero = this.heros[1];

  constructor(private route: ActivatedRoute, private router: Router, private loc: Location) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (result: any) => {
        this.id = result;
        this.hero = this.heros.at(parseInt(this.id.id)-1)!;
      }
    })
    this.route.snapshot.paramMap.get('id');
  }

  back(): void {
    this.loc.back();
  }

}
