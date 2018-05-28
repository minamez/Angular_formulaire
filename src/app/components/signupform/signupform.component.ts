import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Civilite } from './../../models/civilite';
import { User } from './../../models/user';


@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {
  //tableau des civilités à afficher dans le formulaire
  public civilite: Civilite[];
  //instance du modele user
  private user: User;
  //instance pour le controle du formulaire
  public signupForm: FormGroup;

  constructor(private builder: FormBuilder) { 
    this.civilite =new Array();
    this.civilite.push({id:1,libelle:"Mademoiselle"});
    this.civilite.push({id:2,libelle:"Madame"});
    this.civilite.push({id:3,libelle:"Monsieur"});
  }

  public get nom(){ return this.signupForm.controls.nom;}
  public get mail(){ return this.signupForm.controls.mail;}
  public get password(){ return this.signupForm.controls.password;}

  //méthode appeler immédiatement après le constructeur de la classe
  ngOnInit() {
    this.signupForm= this.builder.group({
      nom:['', Validators.required],
      prenom: [''],
      mail: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required],
      civilite:[''],
      cgu: ["",Validators.requiredTrue] // il faut que la case soit coché (que ce soit "true") pour que ce soit valide
    });
  }

}
