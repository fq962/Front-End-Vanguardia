import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/components/about-us/about-us.component';
import { MascotasFormComponent } from './pages/components/mascotas-form/mascotas-form.component';
import { MascotasListComponent } from './pages/components/mascotas-list/mascotas-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/mascotas',
    pathMatch: 'full'
    
  },
  {
    path: 'mascotas',
    component: MascotasListComponent
  },
  {
    path: 'mascotas/aboutus',
    component: AboutUsComponent
  },
  {
    path: 'mascotas/add',
    component: MascotasFormComponent
  },
  {
    path: 'mascotas/edit/:id',
    component: MascotasFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
