import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';
import { Subscription } from 'rxjs';
import { ResizeService } from '../../resize.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit, OnDestroy {

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

    $(document).ready(() => {
      $('.carousel').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true, 
        autoplaySpeed: 6000
      });
    });
  }

  ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe();
  }



}

