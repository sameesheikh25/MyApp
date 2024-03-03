import { Injectable } from '@angular/core';
import { Observable, first, takeUntil } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  
  private obs = new Observable((sub) => {
    sub.next('my');
    sub.next('hero');
    setInterval(() => {
      sub.next('sam')
      sub.complete();
    }, 2000);
    // sub.complete();
  }).pipe(first());

  getHero(): Observable<any> {
    this.messageService.add('msg1');
    return this.obs;
  }
}
