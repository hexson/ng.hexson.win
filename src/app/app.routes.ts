import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home';
import { AllComponent } from './containers/all';
import { TagsComponent } from './containers/tags';
import { TagComponent } from './containers/tag';
import { AboutComponent } from './containers/about';
// import { SearchComponent } from './containers/search';
// import { ArticleComponent } from './containers/article';
// import { NoContentComponent } from './containers/404';


export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'all',
    component: AllComponent
  },
  {
    path: 'tags',
    component: TagsComponent,
  },
  {
    path: 'tag/:tag',
    component: TagComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  // {
  //   path: 'search',
  //   component: SearchComponent
  // },
  // {
  //   path: 'article',
  //   component: ArticleComponent
  // },
  // {
  //   path: '**',
  //   component: NoContentComponent
  // }
]