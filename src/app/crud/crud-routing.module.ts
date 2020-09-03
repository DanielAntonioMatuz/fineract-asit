import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */
import { Route } from '../core/route/route.service';

/** Translation Imports */
import { extract } from '../core/i18n/i18n.service';

/** Custom Components */
import { ViewCrudComponent } from './View/view-crud/view-crud.component';

/** Custom Resolvers */
import { GetOfficesResolver } from '../collections/individual-collection-sheet/get-offices.resolver';

const routes: Routes = [
  Route.withShell([
    {
      path: 'collections',
      children: [
        {
          path: 'crud',
          data: { title: extract('View data from Crud test'), breadcrumb: 'View data from Crud test', routeParamBreadcrumb: false },
          component: ViewCrudComponent,
          resolve: {
            officesData: GetOfficesResolver
          }
        },
      ]
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [GetOfficesResolver],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
