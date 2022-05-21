import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angularProject';
}

@Component({
  selector: 'app-reusable',
  templateUrl: './shared/reusable/reusable.component.html',
  styleUrls: ['./shared/reusable/reusable.component.scss']
})

export class reusableComponent {
  title = 'angularProject';
}



