import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { MainSideNavComponent } from './shared/layouts/main-layout/main-side-nav/main-side-nav.component';
import { MainHeaderComponent } from './shared/layouts/main-layout/main-header/main-header.component';
import { MainFooterComponent } from './shared/layouts/main-layout/main-footer/main-footer.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { GenericSideNavComponent } from './shared/components/generic-side-nav/generic-side-nav.component';
import { BaseComponent } from './shared/components/base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainSideNavComponent,
    MainHeaderComponent,
    MainFooterComponent,
    PageNotFoundComponent,
    GenericSideNavComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
