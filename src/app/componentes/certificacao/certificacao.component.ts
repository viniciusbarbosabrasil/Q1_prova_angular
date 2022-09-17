import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificacao',
  templateUrl: './certificacao.component.html',
  styleUrls: ['./certificacao.component.scss']
})
export class CertificacaoComponent implements OnInit {

  slides: string [] = ['assets/img1.jpg', 'assets/img2.jpg', 'assets/img3.jpg','assets/img4.jpg', 'assets/img5.jpg', 'assets/img6.jpg','assets/img7.jpg', 'assets/img8.jpg', 'assets/img9.jpg','assets/img10.jpg', 'assets/img11.jpg', 'assets/img12.jpg','assets/img13.jpg', 'assets/img14.jpg' ]
    i=0;
    cert1 = 'teste';
    cert2 = 'teste';
    cert3 = '';
    cert4 = '';
    cert5 = '';
    cert6 = '';
    cert7 = '';
    cert8 = '';
    cert9 = '';
    cert10 = '';
    cert11 = '';
    cert12 = '';
    cert13 = '';
    cert14 = '';
    cert15 = '';
    certificacao: string [] = ['Certificações']
    
    paragrafos: string [] = [this.cert1,this.cert2,this.cert3,this.cert4,this.cert5,this.cert6,this.cert7,this.cert8,this.cert9,this.cert10,this.cert11,this.cert12,this.cert13,this.cert14,this.cert15]

    getSlide() {
        return this.slides[this.i];
    }

    getPrev() {
        this.i = this.i===0 ? 0 : this.i - 1;
    }
    
    getNext() {
        this.i = this.i===this.slides.length ? this.i : this.i + 1;
        //this.i = this.i===this.certificacao.length ? this.i : this.i + 1;
        //this.i = this.i===this.paragrafos.length ? this.i : this.i + 1;
    }

    getTitulo() {
        return this.certificacao[this.i];
    }

    getFrase() {
      return this.paragrafos[this.i];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
