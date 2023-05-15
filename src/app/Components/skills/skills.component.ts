import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResizeService } from '../../Service/Resize/resize.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnDestroy {

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



  getValorPorcentaje(id: string): number {
    let valor_porcentaje: number;
    switch (id) {
      case 'js':
        valor_porcentaje = 65;
        break;
      case 'ts':
        valor_porcentaje = 65;
        break;
      case 'java':
        valor_porcentaje = 55;
        break;
      case 'JSON':
        valor_porcentaje = 75;
        break;
      case 'HTML':
        valor_porcentaje = 80;
        break;
      case 'CSS':
        valor_porcentaje = 75;
        break;
      case 'angular':
        valor_porcentaje = 70;
        break;
      case 'SQL':
          valor_porcentaje = 70;
          break;
      case 'Git':
          valor_porcentaje = 80;
          break;
      case 'SCRUM':
          valor_porcentaje = 70;
          break;
      case 'Res-Problemas':
          valor_porcentaje = 60;
          break;
      case 'Aprendizaje':
          valor_porcentaje = 90;
          break;
      case 'Equipo':
          valor_porcentaje = 90;
          break;
      case 'ChatGPT':
          valor_porcentaje = 90;
          break;
      case 'SpringBoot':
          valor_porcentaje = 60;
          break;
      case 'Boostrap':
          valor_porcentaje = 80;
          break;
      default:
        valor_porcentaje = 0;
        break;
    }
    return valor_porcentaje;
  }

  updateProgressBar(id: string): void {
    const valorPorcentaje = this.getValorPorcentaje(id);
    const progressBar = document.querySelector(`#${id}`) as HTMLElement;
    const valorOffset = 492 - (472 * (valorPorcentaje/100));
  
    progressBar.style.setProperty('stroke-dashoffset', valorOffset.toString())
  }
  }

