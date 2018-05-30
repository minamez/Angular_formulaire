import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Task } from './../../models/task';
import { HttpClient } from '@angular/common/http';
import { TodosService } from './../../services/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //instance du modele task
  private tache: Task;
   //instance pour le controle du formulaire
   public homeForm: FormGroup;

  constructor(private builder: FormBuilder,private http: HttpClient, private todosService: TodosService) { }
  
//pour la gestion d'erreurs
public get task(){ return this.homeForm.controls.task;}
public get debut(){ return this.homeForm.controls.debut;}
public get fin(){ return this.homeForm.controls.fin;}

//on submit
  public onFormSubmit(): void {
    if(this.homeForm.valid){
      console.log('Todo: ' +JSON.stringify(this.homeForm.value));
        this.http.post(
          'http://localhost:3000/Todos',
      this.homeForm.value
    ).subscribe((datas: any) => {
      //datas contient les données retournées par le backend.
      //on peut donc émettre un nouveau todo
      this.todosService.sendTask(datas);
      console.log(datas);
    }
  
  )
      }
     else {
      console.log('Pas bon!');
    }
  }

  ngOnInit() {
    this.homeForm= this.builder.group({
      task:['', Validators.required],
      debut: ['',Validators.required],
      fin: ['',Validators.required]
      
    });
  }

}
