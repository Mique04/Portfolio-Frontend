import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResizeService } from '../../Service/Resize/resize.service';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css']
})
export class ExpLaboralComponent implements OnInit, OnDestroy {

  screenWidth = 0;
  private resizeSubscription: Subscription = new Subscription();

  constructor(private resizeService: ResizeService) { }

  ngOnInit(): void {
    const initialWidth = this.resizeService.getScreenWidth();
    if (initialWidth !== undefined) {
      this.screenWidth = initialWidth;
    }
    this.resizeSubscription = this.resizeService.onResize().subscribe(width => {
      this.screenWidth = width;
    });
  }

  ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe();
  }

}
