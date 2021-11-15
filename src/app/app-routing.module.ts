import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './shared/search/search.component';
import { ResultsTableComponent } from './pages/results-table/results-table.component';

const routes: Routes = [
  { path: '', component: ResultsTableComponent },
  { path: 'buscar', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
