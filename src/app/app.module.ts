import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { TicketComponent } from './ticket/ticket.component';
import { SectionPayingComponent } from './section-paying/section-paying.component';
import { HowMuchComponent } from './how-much/how-much.component';
import {FormsModule} from '@angular/forms';
import { VisitCardComponent } from './visit-card/visit-card.component';
import { PereComponent } from './pere/pere.component';
import { FilsComponent } from './fils/fils.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { DefaultPipe } from './default.pipe';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { GoogleKeepComponent } from './google-keep/google-keep.component';
import { CardKeepComponent } from './google-keep/card-keep/card-keep.component';
import { AddNoteComponent } from './google-keep/add-note/add-note.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionOneComponent,
    TicketComponent,
    SectionPayingComponent,
    HowMuchComponent,
    VisitCardComponent,
    PereComponent,
    FilsComponent,
    LoginComponent,
    DirectiveTestComponent,
    DefaultPipe,
    NgStyleComponent,
    GoogleKeepComponent,
    CardKeepComponent,
    AddNoteComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
