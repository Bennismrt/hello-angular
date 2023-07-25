import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeadersComponent } from './headers/headers.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { PreviewDocumentComponent } from './preview-document/preview-document.component';
import { PreviewVideoComponent } from './preview-video/preview-video.component';
import { PreviewPeopleComponent } from './preview-people/preview-people.component';
import { GeneralServices } from './general.services';

const routes: Routes = [
    {path: '', component: DashboardComponent},
]

@NgModule({
  declarations: [
    DashboardComponent,
    HeadersComponent,
    FooterComponent,
    BreadcrumbComponent,
    PreviewVideoComponent,

    PreviewPeopleComponent,
    PreviewDocumentComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ],
  exports: [HeadersComponent, FooterComponent, BreadcrumbComponent, PreviewVideoComponent,PreviewPeopleComponent, PreviewDocumentComponent],
  providers: [GeneralServices]
})
export class PagesModule { }
