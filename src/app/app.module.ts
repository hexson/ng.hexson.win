import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';


import { AppService } from './app.service';
import { HomeComponent } from './containers/home';
import { AllComponent } from './containers/all';
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
    AllComponent,
    NavBarComponent
  ],
  providers: [ AppService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}