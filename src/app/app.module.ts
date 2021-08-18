import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/components/home/home.component';
import { MascotasFormComponent } from './pages/components/mascotas-form/mascotas-form.component';
import { MascotasListComponent } from './pages/components/mascotas-list/mascotas-list.component';
import { NavigationComponent } from './pages/components/navigation/navigation.component';
import { AboutUsComponent } from './pages/components/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MascotasListComponent,
    MascotasFormComponent,
    NavigationComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
