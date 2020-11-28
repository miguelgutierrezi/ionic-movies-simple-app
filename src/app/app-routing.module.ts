import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomePage} from './pages/home/home.page';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'movies',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('./pages/movies-list/movies-list.module').then(m => m.MoviesListPageModule),
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/movies',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
