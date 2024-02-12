import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ItemComponent } from './pages/item/item.component';
import { LAPTOP_ROUTES } from './routes/laptop.routes';
import { SMARTPHONE_ROUTES } from './routes/smartphone.routes';

export const routes: Routes = [
  { 
    path: 'smartphone',
    loadChildren: () => (import('./routes/smartphone.routes')).then(r => r.SMARTPHONE_ROUTES)
  },
  { 
    path: 'clock', 
    title:'Clock', 
    component: MainComponent,
  },
  { 
    path: 'laptop',
    loadChildren: () => (import('./routes/laptop.routes')).then(r => r.LAPTOP_ROUTES)
  },
  { path: '', redirectTo:'smartphone', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];
