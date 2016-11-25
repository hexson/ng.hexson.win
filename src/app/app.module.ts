import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';


import { HomeComponent } from './containers/home';
import { NavBarComponent } from './components/nav-bar.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}