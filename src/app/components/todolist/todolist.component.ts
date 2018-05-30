import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { TodosService } from './../../services/todos.service';
import { Task } from './../../models/task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit, OnDestroy {
  public todos: any[];
  private oTodo: Subscription;

  constructor(private http: HttpClient, private todosService: TodosService) {
  
    this.oTodo = this.todosService.getTask().subscribe((task) => {
this.todos.push(task);
    })
   };
 

  ngOnInit() {
    this.http.get<any[]>(
      'http://localhost:3000/Todos'
    ).subscribe((datas) => {
      //On doit avoir une liste de tâches
      this.todos = datas;
    })
  }

  ngOnDestroy(){
    //Pour être prudent et éviter de gaspiller
    //la mémoire
    this.oTodo.unsubscribe();
  }

}
