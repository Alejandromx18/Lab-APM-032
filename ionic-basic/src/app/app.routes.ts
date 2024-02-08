import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'presupuesto',
    loadComponent: () => import('./presupuesto/presupuesto.page').then( m => m.PresupuestoPage)
  },
];
