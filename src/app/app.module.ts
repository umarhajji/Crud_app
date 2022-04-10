import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule,  } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddClientComponent } from './Components/add_client/add-client.component';
import { ClientDetailComponent } from './Components/client-detail/client-detail.component';
import { FooterComponent } from './Components/footer/footer.component';
//import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, } from '@angular/material/form-field';

const appRoutes: Routes =[
  {path: '', redirectTo:'/clients', pathMatch: 'full'},
  {path: 'clients', component: ClientsComponent},
  {path: 'add-client', component: AddClientComponent},
  {path: 'client-detail/:id', component: ClientDetailComponent}
]
@NgModule({
   declarations: [
    AppComponent,
    HeaderComponent,
    ClientsComponent,
    AddClientComponent,
    ClientDetailComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    FontAwesomeModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FormsModule,
    //MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule
  ],
  providers: [
   // {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent],

  exports:[ RouterModule]
})
export class AppModule { }
