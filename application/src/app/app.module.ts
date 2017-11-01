import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SampleModule, AbstractFormatterService } from 'my-lib';
import { CustomLogFormatterService } from "./custom-log-formatter/custom-log-formatter.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SampleModule.forRoot(true),
    BrowserModule
  ],
  providers: [
     { provide: AbstractFormatterService, useClass: CustomLogFormatterService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
