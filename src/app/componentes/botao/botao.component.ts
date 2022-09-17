import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {

  @Input() botao!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
