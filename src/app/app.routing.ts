import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

import {MagicRouterContainer} from '@magic-xpa/angular';
import {DashboardComponent} from './views/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    //loadChildren: './views/dashboard/dashboard.module#DashboardModule',
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'RoutA',
    component: MagicRouterContainer,
    data: {
      title: 'Rout A'
    }
  },
  {
    path: 'RoutB',
    component: MagicRouterContainer,
    data: {
      title: 'Rout B'
    }
  },
  {
    path: '',
    redirectTo: 'RoutA',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '**',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
