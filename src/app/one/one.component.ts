import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  constructor(stateService: StateService) { }

  ngOnInit(): void {
  }

}
