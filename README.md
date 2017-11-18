# NgAlert

Simple Alert module for Angular version 2 and above.

## Install
`
npm install ng-alert --save
`

## Usage

1. Import `NgAlertModule` in your `AppModule`.

``` typescript
@NgModule({
  imports: [
    NgAlertModule  // <-- import NgAlertModule in your app module
  ],
  declarations: [...],
  providers: [...]
})
export class NgAppModule { }

```

2. In your component :

``` typescript
import { Component } from '@angular/core';
import { AlertService } from 'ng-alert';

@Component({
  selector: 'app-component',
  template: `
    <ng-alert></ng-alert>  <-- Insert ng-alert directive in your html template
    <p>App works!</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(private alertService: AlertService) {

      // this line will push new success alert to alerts array
      this.alertService.success('Your alert message goes here','The title', true);

   }

}

```



## Further help

To get more help on the ng-alert contact me.