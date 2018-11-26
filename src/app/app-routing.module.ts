import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { UncComponent } from './components/unc/unc.component';
import { UmComponent } from './components/um/um.component';



const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'unc', component: UncComponent},
  { path: 'um', component: UmComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'contactenos', component: ContactenosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
