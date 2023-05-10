import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  public windowWidth$: Observable<number>;

  constructor() {
    this.windowWidth$ = this.trackWindowWidth();
  }

  private getWindowWidth(): number {
    return window.innerWidth;
  }
  
  getScreenWidth(): number | undefined {
    return window.innerWidth;
  }

  onResize(): Observable<number> {
    return fromEvent(window, 'resize').pipe(
      map((event: any) => {
        return event.target.innerWidth;
      })
    );
  }

  private trackWindowWidth(): Observable<number> {
    return fromEvent(window, 'resize').pipe(
      map(() => this.getWindowWidth()),
      startWith(this.getWindowWidth())
    );
  }
}
