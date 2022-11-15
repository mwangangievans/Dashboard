import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShortenPipePipe } from './Pipes/shorten-pipe.pipe';
import { TransactionComponent } from './transaction/transaction.component';
import { ReversalsComponent } from './reversals/reversals.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { SettlementComponent } from './settlement/settlement.component';
import { SystemUsersComponent } from './system-users/system-users.component';
import { MobileTransactionsComponent } from './mobile-transactions/mobile-transactions.component';
import { RushGoldComponent } from './rush-gold/rush-gold.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    ShortenPipePipe,
    TransactionComponent,
    ReversalsComponent,
    MerchantsComponent,
    SettlementComponent,
    SystemUsersComponent,
    MobileTransactionsComponent,
    RushGoldComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
