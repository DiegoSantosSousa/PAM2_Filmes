import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mortal-kombat',
    loadChildren: () => import('./filmes/mortal-kombat/mortal-kombat.module').then( m => m.MortalKombatPageModule)
  },
  {
    path: 'queen-slim',
    loadChildren: () => import('./filmes/queen-slim/queen-slim.module').then( m => m.QueenSlimPageModule)
  },
  {
    path: 'the-grand-hotel-budapest',
    loadChildren: () => import('./filmes/the-grand-hotel-budapest/the-grand-hotel-budapest.module').then( m => m.TheGrandHotelBudapestPageModule)
  },
  {
    path: 'alta-sociedade',
    loadChildren: () => import('./filmes/alta-sociedade/alta-sociedade.module').then( m => m.AltaSociedadePageModule)
  },
  {
    path: 'matrix',
    loadChildren: () => import('./filmes/matrix/matrix.module').then( m => m.MatrixPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
