import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import {TodoService} from './todo.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { OffresComponent } from './pages/offres/offres.component';
import { DemandesComponent } from './pages/demandes/demandes.component';
import { DeposeAnnonceComponent } from './pages/depose-annonce/depose-annonce.component';
import { MesAnnoncesComponent } from './pages/mes-annonces/mes-annonces.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OffresComponent,
    DemandesComponent,
    DeposeAnnonceComponent,
    MesAnnoncesComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
