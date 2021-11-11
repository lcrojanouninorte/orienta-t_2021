import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuardService } from './@core/guard/auth-guard.service';
import { CustomPreloadingStrategy } from './@core/configs/custom-preloading-strategy.service';
import { GuestGuardService } from './@core/guard/guest-guard.service';

// Each Route has its owns template.
export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing/landing.module')
      .then(m => m.LandingModule), data: { preload: true, delay: 1000 },
    //  canActivate: [AuthGuardService] ,
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module')
      .then(m => m.AdminModule), data: { preload: true, delay: 4000 },
      canActivate: [AuthGuardService] ,
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil-ocupacional/perfil-ocupacional.module')
      .then(m => m.PerfilOcupacionalModule), data: { preload: true, delay: 2000 },

  },
  {
    path: 'encuesta',
    loadChildren: () => import('./pages/instrumento/instrumento.module')
      .then(m => m.InstrumentoModule), data: { preload: true, delay: 3000 },
      canActivate: [AuthGuardService] ,
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule), data: { preload: true, delay: 5000 },
       canActivate: [AuthGuardService] ,
  },
  {
    path: 'encuesta2',
    loadChildren: () => import('./pages/onu-mujeres/onu-mujeres.module')
      .then(m => m.OnuMujeresModule), data: { preload: true, delay: 12000 },
       canActivate: [AuthGuardService] ,
  },
  {
    path: 'config',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule), data: { preload: false, delay: 7000 },
      canActivate: [AuthGuardService] ,
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module')
      .then(m => m.AuthModule), data: { preload: true, delay: 1000 },
    //  canActivate: [GuestGuardService] ,
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/misc/misc.module')
      .then(m => m.MiscModule), data: { preload: true, delay: 1000 },
    //  canActivate: [GuestGuardService] ,
  },
  { path: '**', redirectTo: 'error' }

];

const config: ExtraOptions = {
    useHash: true,
    relativeLinkResolution: 'legacy'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],

})
export class AppRoutingModule {
}
