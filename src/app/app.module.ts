import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { ConceitosComponent } from './componentes/conceitos/conceitos.component';
import { ParagrafosComponent } from './componentes/paragrafos/paragrafos.component';
import { BotaoComponent } from './componentes/botao/botao.component';
import { ImagemComponent } from './componentes/imagem/imagem.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { TopicosComponent } from './componentes/topicos/topicos.component';
import { AtuacaoComponent } from './componentes/atuacao/atuacao.component';
import { CargosComponent } from './componentes/cargos/cargos.component';
import { CertificacaoComponent } from './componentes/certificacao/certificacao.component';
import { ConteudoComponent } from './componentes/conteudo/conteudo.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ConceitosComponent,
    ParagrafosComponent,
    BotaoComponent,
    FormularioComponent,
    ImagemComponent,
    HabilidadesComponent,
    TopicosComponent,
    AtuacaoComponent,
    CargosComponent,
    CertificacaoComponent,
    ConteudoComponent,
    RodapeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

