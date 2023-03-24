import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RechercheMairieComponent } from './pages/user/recherche-mairie/recherche-mairie.component';
import { InfoMairieComponent } from './pages/user/info-mairie/info-mairie.component';
import { ReservationComponent } from './pages/admin/reservation/reservation.component';
import { PaiementComponent } from './pages/user/paiement/paiement.component';
import { RecuComponent } from './pages/user/recu/recu.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AccueilComponent } from './pages/user/accueil/accueil.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { DeconnexionComponent } from './pages/admin/deconnexion/deconnexion.component';
import { VerificationComponent } from './pages/user/verification/verification.component';
import { ReclamationComponent } from './pages/user/reclamation/reclamation.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './pages/user/contact/contact.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { EnregistrerComponent } from './pages/user/enregistrer/enregistrer.component';




@NgModule({
  declarations: [
    AppComponent,
    RechercheMairieComponent,
    InfoMairieComponent,
    ReservationComponent,
    PaiementComponent,
    RecuComponent,
    FooterComponent,
    DashboardComponent,
    AccueilComponent,
    SidebarComponent,
    HomeComponent,
    DeconnexionComponent,
    VerificationComponent,
    ReclamationComponent,
    NavbarComponent,
    ContactComponent,
    EnregistrerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
