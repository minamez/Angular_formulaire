import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignupformComponent } from '../../components/signupform/signupform.component';
import { HomeComponent } from '../../components/home/home.component';
import { AuthguardService } from './../../services/authguard.service';

const routes: Routes = [
  //définitions des chemins
  {path: '', redirectTo: 'home', pathMatch:'full'},// quand on fait http://localhost:4200/ , on est redirigé vers le formulaire
  {path: 'signup', component: SignupformComponent},// quand on fait http://localhost:4200/signup , on est dirigé vers le formulaire
  {path: 'home', component: HomeComponent, canActivate: [AuthguardService]}// quand on fait http://localhost:4200/home , on est dirigé vers l'accueil'
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})//Décorateur, attribue les "routes" à "RouterModule", "useHash" permet de rester dans le navigateur et de ne pas repasser par le server
  ],
  declarations: []
})


export class RoutingModule { }
