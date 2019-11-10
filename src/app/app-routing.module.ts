import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';
import { ViewDocumentComponent } from './components/view-document/view-document.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddDocumentComponent } from './components/add-document/add-document.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';

const routes: Routes = [


    // App routes goes here
    {
      path: '',
      component: AppLayoutComponent,
      children: [
        { path: '', component: HomeComponent, pathMatch: 'full'},
        {path: 'view/:slug', component: ViewDocumentComponent}
      ]
    },
        // App routes goes here
    {
          path: 'admin',
          component: AdminLayoutComponent,
          children: [
            {path: 'documents', component: DocumentsComponent},
            {path: 'documents/edit/:id', component: EditDocumentComponent},
            {path: 'documents/add', component: AddDocumentComponent},
            {path: 'login', component: LoginComponent},
            {path: 'dashboard', component: DashboardComponent}
          ]
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
