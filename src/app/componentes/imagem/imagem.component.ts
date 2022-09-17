import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.scss']
})
export class ImagemComponent implements OnInit {

  @Input() imagem!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
