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
import { CommonHeaderComponent } from './components/common-header.component';
import { LoadingComponent } from './components/loading.component';
import { ReloadComponent } from './components/reload.component';
import { SingleViewsComponent } from './components/single-views.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AllComponent,
    NavBarComponent,
    CommonHeaderComponent,
    LoadingComponent,
    ReloadComponent,
    SingleViewsComponent
  ],
  providers: [ AppService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}