import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryContainerComponent } from './modules/gallery/gallery-container/gallery-container.component';
import { HomeContainerComponent } from './modules/home/components/home-container/home-container.component';
import { ProdContainerComponent } from './modules/prods/prod-container/prod-container.component';
import { RehearsalContainerComponent } from './modules/rehearsal/rehearsal-container/rehearsal-container.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component: HomeContainerComponent },
  { path:'produzioni', component: ProdContainerComponent},
  { path:'gallery', component: GalleryContainerComponent},
  { path:'sala_prove', component: RehearsalContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
