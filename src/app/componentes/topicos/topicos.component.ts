import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topicos',
  templateUrl: './topicos.component.html',
  styleUrls: ['./topicos.component.scss']
})
export class TopicosComponent implements OnInit {
  @Input() imagem!:string;
  @Input() titulo!:string;
  @Input() texto!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
