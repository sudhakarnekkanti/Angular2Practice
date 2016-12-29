import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Welcome to {{name}} world</h1>`,
})
export class AppComponent  { name = 'Angular'; }