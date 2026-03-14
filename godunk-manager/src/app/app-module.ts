import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard'; 
import { PurchaseOrder } from './purchase-order/purchase-order';

// Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Inventory } from './inventory/inventory';
import { Finance } from './finance/finance';

@NgModule({
  declarations: [
    App,  
    Home,
    Dashboard,
    PurchaseOrder,
    Inventory,
    Finance 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { } // 🌟 จบแค่นี้ ห้ามมีโค้ด HTML ต่อท้ายเด็ดขาดครับ