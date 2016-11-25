import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';


import { HomeComponent } from './containers/home';



@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}