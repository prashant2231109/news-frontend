import { Routes } from '@angular/router';
import { Login } from './features/auth/components/login/login';
import { Signup } from './features/auth/components/signup/signup';
import { SourceList } from './features/source/components/source-list/source-list';
import { SourceFormComponent } from './features/source/components/source-form/source-form';

export const routes: Routes = [

{ path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'signup', component: Signup },

  { path: 'sources', component: SourceList },
  { path: 'add-source', component: SourceFormComponent },
];
