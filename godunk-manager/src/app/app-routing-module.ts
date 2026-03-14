import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard'; 
import { PurchaseOrder } from './purchase-order/purchase-order'; 
import { Inventory } from './inventory/inventory'; 
// 💰 เพิ่ม Import หน้าการเงิน
import { Finance } from './finance/finance'; 

const routes: Routes = [
  { path: '', component: Home }, 
  { path: 'dashboard', component: Dashboard }, 
  { path: 'purchase-order', component: PurchaseOrder }, 
  { path: 'inventory', component: Inventory }, 
  // 💰 เพิ่มเส้นทาง (Path) หน้าการเงิน
  { path: 'finance', component: Finance }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }