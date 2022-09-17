import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtuacaoComponent } from './componentes/atuacao/atuacao.component';
import { CertificacaoComponent } from './componentes/certificacao/certificacao.component';
import { ConceitosComponent } from './componentes/conceitos/conceitos.component';
import { ConteudoComponent } from './componentes/conteudo/conteudo.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';

const routes: Routes = [
    { path: 'conceitos', component: ConceitosComponent },
    { path: 'habilidades', component: HabilidadesComponent },
    { path: 'area', component: AtuacaoComponent },
    { path: 'certificado', component: CertificacaoComponent },
    { path: 'conteudo', component: ConteudoComponent },
    { path: 'formulario', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
