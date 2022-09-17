import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paragrafos',
  templateUrl: './paragrafos.component.html',
  styleUrls: ['./paragrafos.component.scss']
})
export class ParagrafosComponent implements OnInit {

  constructor() {  }

  @Input() valor!: string;

  ngOnInit(): void {
  }

}
