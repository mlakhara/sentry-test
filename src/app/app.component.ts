import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sentry';

  throwError(event) {
    event.preventDefault();

    throw new Error('Sentry test');
  }
}
