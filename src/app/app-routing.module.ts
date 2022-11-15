import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { ReversalsComponent } from './reversals/reversals.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { SettlementComponent } from './settlement/settlement.component';
import { SystemUsersComponent } from './system-users/system-users.component';
import { MobileTransactionsComponent } from './mobile-transactions/mobile-transactions.component';
import { RushGoldComponent } from './rush-gold/rush-gold.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'transactions',component:TransactionComponent},
  {path:'reversals',component:ReversalsComponent},
  {path:'merchants',component:MerchantsComponent},
  {path:'settlement',component:SettlementComponent},
  {path:'system-users',component:SystemUsersComponent},
  {path:'mobile-transactions',component:MobileTransactionsComponent},
  {path:'RushGold',component:RushGoldComponent},

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ]
})
export class AppRoutingModule { }
