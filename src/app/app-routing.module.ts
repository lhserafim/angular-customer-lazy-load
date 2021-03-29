import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Preloading modules (quando necessário para melhorar a UX e reduzir os carregamentos das rotas)
//import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: '', redirectTo: '', pathMatch: 'full'}];

  // The first two paths are the routes to the CustomersModule and the OrdersModule. The final entry defines a default route. 
  // The empty path matches everything that doesn't match an earlier path.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // Importação p/ fazer um pre-loading das rotas
  // imports: [RouterModule.forRoot(
  //   routes,
  //   {
  //     preloadingStrategy: PreloadAllModules
  //   }
  // )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// https://angular.io/guide/lazy-loading-ngmodules