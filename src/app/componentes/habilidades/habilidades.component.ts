import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {
  linux = 'Saber operar um sistema operacional Linux e os principais comandos. Dominar o Kali Linux e suas principais ferramentas';
  rede = 'Noções básicas de redes de computadores e os principais protocolos de rede';
  prog = 'Aprender uma linguagem de programação e aprender desenvolvimento web';
  vuln = 'Saber buscar por vulnerabilidades e identificá-las e saber catalogar, classificar e reportar vulnerabilidades';
  ferramentas = 'Dominar o uso, edição e criação de ferramentas hackers de código aberto, identificar, editar e rodar exploits e dominar técnicas de pós-exploração, pivoting e lateralidade';
  criatividade = 'Aprender a pensar de forma criativa e resolver problemas';
  fundamentos = 'Aprender modelos de serviço e implantação, fundamentos de provedores de serviços de nuvem, armazenamento e segurança de dados na nuvem';
  shell = 'Script para automatizar algo e scripts de segurança úteis também são escritos em shell script';
  vers = 'Noções básicas do Git para recursos de aprendizado, laboratórios e projetos';
  troca = 'Entre as habilidades comportamentais que favorecem os profissionais da área, a facilidade de trabalhar em equipe é uma das mais valorizadas';
  normas = 'Aprender as melhores práticas, tais como ISO 27000 e suas derivações – COBIT, ITIL, COSO, práticas de segurança';
  visao = 'Preparo para discutir um planejamento de Segurança da Informação com viés de negócios';
  constructor() { }

  ngOnInit(): void {
  }

}
