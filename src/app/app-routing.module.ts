import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'note',
    loadChildren: () => import('./note/note.module').then(m => m.NotePageModule)
  },
  {
    path: 'newuser',
    loadChildren: () => import('./newuser/newuser.module').then(m => m.NewuserPageModule)
  },
  {
    path: 'restpass',
    loadChildren: () => import('./restpass/restpass.module').then(m => m.RestpassPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }