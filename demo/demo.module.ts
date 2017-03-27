import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YcjsCoreModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, YcjsCoreModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}