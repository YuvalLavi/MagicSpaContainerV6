import {
  Routes
} from '@angular/router';
import {
  MagicRouterContainer
} from "@magic-xpa/angular";
export const routes: Routes = [{
  path: 'RoutA',
  component: MagicRouterContainer,
},
  {
    path: 'RoutB',
    component: MagicRouterContainer,
  },
];
