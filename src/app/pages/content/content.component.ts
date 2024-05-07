import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  photoCover: string =
    'https://www.mundodeportivo.com/alfabeta/hero/2024/03/iron-man-tony-stark-marvel-2-1.jpg?width=1200';
  contentTitle: string = 'Minha notócia';
  contentDescription: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quis eos quas, dolor quod praesentium vitae a saepe neque non totam, deleniti delectus architecto corporis ducimus enim at dolore? Porro.';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
  }

  setValuesToComponent(id: string| null) {
    const result = dataFake.filter((article) => article.id === id);
  }
}
