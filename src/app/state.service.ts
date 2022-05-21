import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  


  constructor() { }

  public ReusableComponentState= new Subject<boolean>();
  
  getReusable(){
    return this.ReusableComponentState;
  }
}
