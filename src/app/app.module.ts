import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HighlightDirective } from './highlight.directive';
import { EmpComponent } from './emp/emp.component';
import { EmpService } from './emp.service';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { AuditlogComponent } from './auditlog/auditlog.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CounterComponent } from './counter/counter.component';
import { childComponent } from './child-component';
import { ChildCounterComponent } from './child-component-counter';
import { CustomerComponent } from './customer/customer.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { GrossalPipe } from './grossal.pipe';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { FeedbacklistComponent } from './feedbacklist/feedbacklist.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HighlightDirective,
    EmpComponent,
    EmpDetailsComponent,
    AuditlogComponent,
    PagenotfoundComponent,
    DashboardComponent,
    CounterComponent,
    childComponent,
    ChildCounterComponent,
    CustomerComponent,
    UserListComponent,
    UserDetailsComponent,
    AddUsersComponent,
    UserDetailsComponent,
    GrossalPipe,
    FeedbackformComponent,
    FeedbacklistComponent,
    FeedbackComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
