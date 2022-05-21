import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.scss']
})
export class ReusableComponent implements OnInit {

  constructor(stateService: StateService) { }

  ngOnInit(): void {
  }

}
