import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { LogoutComponent } from './logout/logout.component'
import { DrinkComponent } from './drink/drink.component'
import { DropTableComponent } from './drop-table/drop-table.component'
import { DropTableCustomComponent } from './drop-table-custom/drop-table-custom.component';


const routes: Routes = [
  {
    path: 'drink',
    component: DrinkComponent
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'dropTable',
        component: DropTableComponent,
      },
      {
        path: 'dropTableCustom',
        component: DropTableCustomComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: '',
        redirectTo: 'dropTableCustom',
        pathMatch: 'full'
      }
    ]
  },

  {
    path: '**',
    component: AppComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
