import { Component } from '@angular/core';
import { LoggerService } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private loggerService: LoggerService) {
    loggerService.debug('Hello World!');
    loggerService.log('serious message!');
  }
}
