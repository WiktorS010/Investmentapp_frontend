import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { InvestmentComponent } from './investment/investment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddInvestmentFormComponent } from './add-investment-form/add-investment-form.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'investment', component: InvestmentComponent },
  { path: 'add-investment-form', component: AddInvestmentFormComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvestmentComponent,
    NavbarComponent,
    AddInvestmentFormComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
