import { OnInit,Component} from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from './Todo';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent implements OnInit{
todos:Todo[];
  title = 'app works!';
  constructor(private todoService:TodoService){}
  ngOnInit(){
    this.todos=[];
    this.todoService.getAllTodo().subscribe((todos)=>{
      console.log('hello world');
  this.todos=todos;
    })
  }
}