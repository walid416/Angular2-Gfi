import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { OffresComponent } from './pages/offres/offres.component';
import { DemandesComponent } from './pages/demandes/demandes.component';
import { DeposeAnnonceComponent } from './pages/depose-annonce/depose-annonce.component';
import { MesAnnoncesComponent } from './pages/mes-annonces/mes-annonces.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { QuiNousSommesComponent } from './pages/entreprise/qui-nous-sommes/qui-nous-sommes.component';
import { ContactFormComponent } from './form/contact/contact-form.component';
import { BreadcrumbComponent } from './includes/breadcrumb/breadcrumb.component';
const routes: Routes = [
  { path: '', redirectTo: 'Acceuil', pathMatch: 'full' },
  { path: 'Acceuil', component: AcceuilComponent },
  { path: 'Offres', component: OffresComponent },
  { path: 'Demances', component: DemandesComponent },
  { path: 'Demandes', component: DemandesComponent },
  { path: 'Deposer une annonce', component: DeposeAnnonceComponent },
  { path: 'Mes annonces', component: MesAnnoncesComponent },
  { path: 'Connexion', component: ConnexionComponent },
  { path: 'entreprise/qui-sommes-nous', component: QuiNousSommesComponent },
  { path: 'entreprise/contact', component: ContactFormComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OffresComponent,
    DemandesComponent,
    DeposeAnnonceComponent,
    MesAnnoncesComponent,
    AcceuilComponent,
    ConnexionComponent,
    QuiNousSommesComponent,
	ContactFormComponent,
	BreadcrumbComponent
  ],
  imports: [
    BrowserModule, 
	FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) // <-- installs Router routes, components and services
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
