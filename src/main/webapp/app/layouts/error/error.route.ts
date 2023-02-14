import { Routes } from '@angular/router';

import { ErrorComponent } from './error.component';

export const errorRoute: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
    data: {
      pageTitle: 'Fehlerseite!',
    },
  },
  {
    path: 'accessdenied',
    component: ErrorComponent,
    data: {
      pageTitle: 'Fehlerseite!',
      errorMessage: 'Sie haben nicht die nötigen Berechtigungen um diese Seite anzuzeigen.',
    },
  },
  {
    path: '404',
    component: ErrorComponent,
    data: {
      pageTitle: 'Fehlerseite!',
      errorMessage: 'Die Seite existiert nicht.',
    },
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];
