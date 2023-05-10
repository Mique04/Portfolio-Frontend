import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResizeService } from '../../resize.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

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

    this.SacarPading();
    window.addEventListener('resize', () => this.SacarPading());
  }

  ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe();
  }


  isHovering = false;

  developer: Developer = {
    nombre: 'Miqueas',
    apellido: 'Santillán',
    profesion: 'Desarrollador Web Full Stack'
  };
  
  SacarPading() {
    const sectionPading = document.getElementById("section") as HTMLElement

    if (window.innerWidth < 840) {
      sectionPading.classList.remove('p-section')
    }
    else {
      sectionPading.classList.add('p-section');
    }
  }

}

interface Developer {
  nombre: string;
  apellido: string;
  profesion: string;
}