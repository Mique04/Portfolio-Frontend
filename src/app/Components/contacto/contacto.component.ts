import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResizeService } from '../../Service/Resize/resize.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit, OnDestroy {

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

  enviarCorreoGmail() {
    window.open("https://mail.google.com/mail/?view=cm&to=miqueassantillan2704@gmail.com&su=He%20visitado%20tu%20Portfolio...", '_blank');
    }
    
    
}
