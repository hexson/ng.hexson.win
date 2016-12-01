import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';


import { AppService } from './app.service';
import { HomeComponent } from './containers/home';
import { AllComponent } from './containers/all';
import { TagsComponent } from './containers/tags';
import { TagComponent } from './containers/tag';
import { AboutComponent } from './containers/about';
import { SearchComponent } from './containers/search';
import { QComponent } from './containers/q';
import { ArticleComponent } from './containers/article';
import { NoContentComponent } from './containers/404';
import { NavBarComponent } from './components/nav-bar.component';
import { CommonHeaderComponent } from './components/common-header.component';
import { LoadingComponent } from './components/loading.component';
import { ReloadComponent } from './components/reload.component';
import { SingleViewsComponent } from './components/single-views.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AllComponent,
    TagsComponent,
    TagComponent,
    AboutComponent,
    SearchComponent,
    QComponent,
    ArticleComponent,
    NoContentComponent,
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