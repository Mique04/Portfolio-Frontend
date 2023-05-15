import { Component, Injector, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResizeService } from 'src/app/Service/Resize/resize.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  screenWidth = 0;
  public resizeSubscription: Subscription = new Subscription();

  constructor(public injector: Injector, public resizeService: ResizeService) {}

  ngOnInit() {
    this.resizeService.windowWidth$.subscribe(width => {
      console.log('El ancho de la ventana es:', width);
      this.screenWidth = width;
    }); 
  }
}
