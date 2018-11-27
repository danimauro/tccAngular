import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';

//Shared
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/shared/home/home.component';

//Components
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { OrganizacionComponent } from './components/organizacion/organizacion.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    ContactenosComponent,
    OrganizacionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
