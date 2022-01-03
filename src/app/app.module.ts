import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';
import { BioComponent } from './bio/bio.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { WorksModule } from './works/works.module';
import { ContactModule } from './contact/contact.module';
import { BioModule } from './bio/bio.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    BioComponent,
    WorksComponent,
    ContactComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,

    HomeModule,
    WorksModule,
    ContactModule,
    BioModule,
    LayoutModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    BrowserAnimationsModule,

    // AppRouting goes last
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
