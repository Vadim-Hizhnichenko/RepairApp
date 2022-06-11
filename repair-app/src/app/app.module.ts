import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RepairComponent } from './components/repair/repair.component';
import { ShowRepairComponent } from './components/show-repair/show-repair.component';
import { AddRepairComponent } from './components/add-repair/add-repair.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepairApiService } from './services/repair-api.service';

@NgModule({
  declarations: [
    AppComponent,
    RepairComponent,
    ShowRepairComponent,
    AddRepairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RepairApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
