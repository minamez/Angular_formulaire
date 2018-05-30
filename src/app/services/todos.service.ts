import { Injectable } from '@angular/core';
import { Task } from './../models/task';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private _todo:Subject<Task> = new Subject<Task>();

  constructor() { }

  //Emet une information vers tous les subscribers
  public sendTask(task: Task): void {
    this._todo.next(task);
  }
//retourne un objet Task comme observable
  public getTask(): Observable<Task>{
    return this._todo.asObservable();
  }
}
