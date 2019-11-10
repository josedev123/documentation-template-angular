import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { HomeComponent } from './components/home/home.component';
import { DocumentService } from './services/document.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';
import { ViewDocumentComponent } from './components/view-document/view-document.component';
import { ViewNavigationComponent } from './components/view-navigation/view-navigation.component';
import { TestComponent } from './components/test/test.component';
import { ContentSnippetComponent } from './components/content-snippet/content-snippet.component';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddDocumentComponent } from './components/add-document/add-document.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    HomeComponent,
    EditDocumentComponent,
    ViewDocumentComponent,
    ViewNavigationComponent,
    ContentSnippetComponent,
    TestComponent,
    LoginComponent,
    DashboardComponent,
    AddDocumentComponent,
    AppLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [
    DocumentService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
