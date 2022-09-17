import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.scss']
})
export class CargosComponent implements OnInit {
  cargos =[
    {
        id: 1,
        cargo_img: "assets/analista.png",
        nomeCargo: "Analista",
        resumo: "O Analista é encarregado de ajudar no diagnóstico de problemas.",
        requisitos: "Para cargos de analista na área de segurança da informação são requisitados formação bacharela em uma área relacionada a Tecnologia da Informação, experiencia de 5 a 9 anos na área de TI, noções básicas de TCP/IP, modelo OSI, roteadores e switchs.",
        atrib1: ["Identificação de ameaças, vulnerabilidades e riscos;",
        "Monitorar indicadores e alertas de segurança;",
        "Analisar tendencias de eventos de segurança com uso de ferramentas especificas."]
    },
    {
        id: 2,
        cargo_img: "assets/especialista.png",
        nomeCargo: "Especialista",
        resumo: "Como principal função o especialista deverá ajudar no diagnóstico de problemas.",
        requisitos: "Para cargos de especialista na área de segurança da informação são requisitados ao menos 1 ano de experiência atuando na área de segurança da informação e para posições sênior ao menos 5 anos.",
        atrib1: ["Projetar, testar, configurar e monitorar controles de seguranças para sistemas e redes;",
        "Defender sistemas contra invasões, modificações e/ou destruições de dados;",
        "Realizar testes de vulnerabilidade, análise de risco e avaliações de segurança."]
    },
    {
        id: 3,
        cargo_img: "assets/auditor.png",
        nomeCargo: "Auditor",
        resumo: "Os Auditores da área da segurança da informação devem garantir que a organização esteja protegendo o que é necessário.",
        requisitos: "Auditores da área de segurança da informação devem possuir formações relacionas a área de TI, ao menos 5 a 7 anos de experiência com auditorias, além de bom conhecimento de leis que regulam a segurança de dados e experiencias com implementação de estruturas ISO 27001/27002, ITIL ou COBIT.",
        atrib1: ["Planejar, executar e liderar auditorias de segurança em uma empresa;",
        "Elaborar recomendações rigorosas de “melhores práticas” para melhorar a segurança em todos os níveis;",
        "Trabalhar com a gerência para melhorar a conformidade de segurança, gerenciar riscos e melhorar a eficácia da segurança."]
    },
    {
        id: 4,
        cargo_img: "assets/engenheiro.png",
        nomeCargo: "Engenheiro",
        resumo: "Engenheiros da área de segurança da informação são os responsáveis por projetar sistemas e resolver problemas complexos da área.",
        requisitos: "Para engenheiros na área de segurança da informação são requisitados formações relacionas a área de TI, ao menos 5 anos de experiência com TI e com pelo menos 3 relacionados a segurança, atuação ativa com tecnologias e processos de segurança, desde configurações de firewall a investigação forense, além de conhecimentos de SO's como Linux, Windows.",
        atrib1: ["Desenvolver soluções e ferramentas para área de segurança;",
        "Investigar incidentes de intrusão, conduzir investigações forenses e liderar respostas a incidentes;",
        "Elaborar scripts para lidar e rastrear incidentes além de automatizar tarefas repetitivas."]
    },
    {
        id: 5,
        cargo_img: "assets/consultor.png",
        nomeCargo: "Consultor",
        resumo: "Consultores da área de segurança da informação são os responsáveis por orientar clientes em questões técnicas relacionadas a área.",
        requisitos: "Além de habilidades de comunicação e uma formação voltada a área de TI um bom consultor deve possuir experiência minima de 2 a 4 anos com segurança da informação, e em empresas lideres no ramo, vivência com supervisão de equipes de nível júnior e experiencias com ISO 27001/27002, ITIL e COBIT e implementação de frameworks como PCI, HIPAA, NIST, GLBA ou SOX.",
        atrib1: ["Determinar o meio mais eficaz de proteger equipamentos, redes, softwares, dados e informações contra possíveis ataques;",
        "Avaliar com base em relatos de empregados e gerentes de departamento o estado da rede e mapear possíveis vulnerabilidades;",
        "Realiza testes de vulnerabilidade, análises de risco e avaliações de segurança seguindo critérios de análise padrão do setor."]
    },
    {
        id: 6,
        cargo_img: "assets/administrador.png",
        nomeCargo: "Administrador",
        resumo: "Administradores voltados a área da segurança são os responsáveis por oferecer suporte a sistemas de segurança e garantir que apenas pessoas autorizadas possam acessá-los.",
        requisitos: "Para cargos voltados a administração de segurança da informação, são requisitados a formação em áreas relacionadas a TI, de 1 a 2 anos de experiência com TI, sendo um ano voltado a, atividades administrativas para segurança da informação e experiencias técnicas com segurança de redes atuando com identificação e controle de acesso, firewalls, VPNs, etc..",
        atrib1: ["Administrar os direitos de acesso de usuários ao sistema;",
        "Configurar e suportar sistemas de segurança, como firewalls, antivírus, gerenciadores de patches;",
        "Monitorar o tráfego de rede para atividades incomuns."]
    },
    {
        id: 7,
        cargo_img: "assets/arquiteto.png",
        nomeCargo: "Arquiteto",
        resumo: "Arquitetos de segurança da informação são aqueles incumbidos de projetar e arquitetar soluções de segurança complexas e garantir que sejam implementadas corretamente.",
        requisitos: "Profissionais que atuam como arquitetos da área normalmente possuem ao menos 7 anos de experiência com segurança da informação ou gerenciamento de risco de TI, no mínimo 5 anos de experiências exercendo atividades relacionadas a elaboração de arquiteturas, além de grande conhecimento em clouding, princípios de arquitetura e frameworks da área.",
        atrib1: ["Planejar, pesquisar e elaborar arquiteturas robustas de segurança para qualquer projeto voltado a área de TI;",
        "Testar, revisar e aprovar instalações de firewall, VPNs, roteadores, IDS de varredura e servidores;",
        "Fornecer supervisão técnica e orientação para equipes de segurança da informação."]
    },
    {
        id: 8,
        cargo_img: "assets/gerente.png",
        nomeCargo: "Gerente",
        resumo: "São os responsáveis por gerenciar equipes e projetos na área de segurança da informação.",
        requisitos: "Além da formação na área de TI, é exigido dos Gerentes ao menos 6 anos de experiência com segurança da informação ou de áreas relacionadas, experiência com implementação de padrões e boas práticas para segurança da informação e experiência liderando equipes diversas.",
        atrib1: ["Criar e executar estratégias que melhorem o programa de segurança de uma organização;", 
        "Definir, implementar e manter politicas e procedimentos de segurança da informação;",
        "Gerenciar equipes de administradores, analistas e demais profissionais da área."]
    },
    {
        id: 9,
        cargo_img: "assets/diretor.png",
        nomeCargo: "Diretor",
        resumo: "Com todo conhecimento adquirido a longo do tempo atuando na área é o responsável por definir a visão de segurança da organização e trabalhar em conjunto com as lideranças para garantir que ela seja implementada.",
        requisitos: "Em geral, se busca nos Diretores uma formação na área de TI, em casos especiais até de nível mestre, experiência minima de 8 anos atuando com segurança de TI e outros 4 anos de experiência com atividades de gerenciamento de reports a diretoria.",
        atrib1: ["Prover a visão do estado ideal de segurança para a organização;", "Liderar o planejamento estratégico para a implementação de tecnologias de segurança de TI e supervisionar os departamentos de segurança;", "Preparar e apresentar relatórios técnicos de segurança para gestão executiva."]
    },
];
slides: string [] = ['cargos[0].cargo_img', 'cargos[1].cargo_img', 'cargos[2].cargo_img','cargos[3].cargo_img', 'cargos[4].cargo_img', 'cargos[5].cargo_img','cargos[6].cargo_img', 'cargos[7].cargo_img', 'cargos[8].cargo_img','cargos[9].cargo_img'];
    i=0;
    getSlide() {
        return this.slides[this.i];
    }

    getPrev() {
        this.i = this.i===0 ? 0 : this.i - 1;
    }
    
    getNext() {
        //this.i = this.i===this.slides.length ? this.i : this.i + 1;
        this.i = this.i===this.cargos.length ? this.i : this.i + 1;
    }

    getFrase() {
        let cert =  [];
        return cert = [this.cargos[this.i].cargo_img,this.cargos[this.i].nomeCargo,this.cargos[this.i].resumo,this.cargos[this.i].requisitos,this.cargos[this.i].atrib1];
      
  }


  constructor() { }

  ngOnInit(): void {
  }

}
