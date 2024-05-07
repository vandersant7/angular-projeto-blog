import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

  @Input() //Essa property binding tornar os as priedades abaixo dela inputáveis, podemos reaproveitar os nossos
  photoCover:string = ''
  @Input() cardTitle:string = ''
  @Input() cardDescription:string =''
  @Input() Id:string="0"

}
