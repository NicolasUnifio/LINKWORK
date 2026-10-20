import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Page1Module } from './modules/page1/page1-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, Page1Module],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
