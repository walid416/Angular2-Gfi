import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
 export class TodoService{
   constructor(private http:Http){}

getAllTodo(){
return this.http.get('/api/todos').map((res)=>{
console.log(res);
return res.json();});
}
}
