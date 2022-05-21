import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  


  constructor() { }

  ReusableComponentState= new Subject<boolean>();
 
  
  getReusable(){
    return this.ReusableComponentState;
  }

  checkBoxState =new Subject<boolean>();

  checkBoxChanged(){
    
  }
}
