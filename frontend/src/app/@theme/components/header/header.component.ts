import { Component, OnDestroy, OnInit, AfterViewInit, Input } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';
import { User } from '../../../@core/data/remote/schemas/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil, filter } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { RippleService } from '../../../@core/utils/ripple.service';
import { AuthService } from '../../../@core/data/remote/services/auth.service';
import { NbAccessChecker } from '@nebular/security';
import { Location } from '@angular/common';


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy,  AfterViewInit {

  @Input() color: string;

  private destroy$: Subject<void> = new Subject<void>();
  public readonly materialTheme$: Observable<boolean>;
  isDark = false;
  userPictureOnly: boolean = false;
  user: any;
  loading: boolean;
  themes = [
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'material-light',
      name: 'Material Light',
    },
  ];

  currentTheme = 'material-light';

  userMenu = [{}];
  contribMenu = [
    { title: 'Patrocinadores', icon: 'star-outline'},
   // { title: 'Donaciones y Aportes', icon: 'briefcase-outline'},
  ];
  infoMenu = [
    { title: 'Aviso Legal',  icon: 'shield-outline' },
    { title: 'Desarrolladores', icon: 'code-outline'},
    { title: 'Colaboladores', icon: 'bulb-outline' },

    // { title: 'Equipo Directivo', icon: 'people-outline'},
    // { title: 'FAQs', icon: 'question-mark-circle-outline'},
  ];

  public constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private rippleService: RippleService,
    private _authService: AuthService,
    private nbMenuService: NbMenuService,
    private _router: Router,
    public _accessChecker: NbAccessChecker,
    private _dialogService: NbDialogService,
    private location: Location,
  ) {
    this._authService.getCurrentUser()
    .subscribe((user: User) => {
      if (user) {
        this.user = user;
        this.userMenu = [{ title: 'Cerrar Sesión', icon:'log-out-outline' }];

      } else {

        this.layoutService.changeLayoutSize();
        this.user = new User();
        this.userMenu = [
          { title: 'Ingresar', icon:'log-in-outline'        },
          { title: 'Registrarse', icon:'person-add-outline'   }];
         // this._router.navigate(['auth/login']);
      }
    });

    this.materialTheme$ = this.themeService.onThemeChange()
      .pipe(map(theme => {
        const themeName: string = theme?.name || '';
        return themeName.startsWith('material');
      }));

    // Custum methods:

    /**
   * Logout the user and revoke his token
   */
    this.nbMenuService.onItemClick()
      .pipe(

      filter(({ tag }) => ['user-context-menu', 'infoMenu', 'contribMenu'].includes(tag)   ),
        map(({ item: { title } }) => title),
        takeUntil(this.destroy$),
      )
      .subscribe((title) => {
        this.execMenuOption(title);
      });

  }
  showVideo(){
  //  this._dialogService.open(UnidosMagdalenaComponent);

  }
  execMenuOption(title: string) {
    switch (title) {
      case 'Cerrar Sesión':
        this.loading = true;
        this._authService.logout()
          .subscribe(() => {
            this.loading = false;
            this.user = new User().deserialize(new User());
          if ( this._router.navigate(['auth/login'])) {

          }

          });
        break;/*
      case 'Patrocinadores':
        this._dialogService.open(PatrocinadoresComponent);
      break;
      case 'Donaciones y Aportes':
        this._dialogService.open(DonacionesComponent);

        break;
      case 'Aviso Legal':
        this._dialogService.open(AvisoLegalComponent);

        break;
      case 'Colaboladores':
        this._dialogService.open(ColaboratorsComponent);

        break;
      case 'Desarrolladores':
        this._dialogService.open(DevelopersComponent);
        break;
      case 'Equipo Directivo':
        this._dialogService.open(DirectivosComponent);

        break;

      case 'Unidos por Magdalena':
        this._dialogService.open(UnidosMagdalenaComponent);

        break;
      case 'FAQs':
      this._dialogService.open(FAQsComponent);
      */
      break;
        default:
          this._router.navigate(['auth/login']);
          break;
    }
  }

  ngAfterViewInit() {
    this._accessChecker.isGranted('View Side Menu', 'all').subscribe(
      haveAccess => {
        if (haveAccess) {
          if (!this.userPictureOnly ) {
           // this.compactSidebar();
          }
        }
      },
    );
  }
  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    /*this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.nick);
*/
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => {
        this.currentTheme = themeName;
        this.rippleService.toggle(themeName?.startsWith('obsrio'));
      });

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {

    if(this._router.url === '/' ){
      this.sidebarService.toggle(false, 'menu-sidebar');

    }else{
      this.sidebarService.toggle(true, 'menu-sidebar');

    }
    this.layoutService.changeLayoutSize();

    return false;
  }
  compactSidebar(): boolean {

   // this.sidebarService.collapse( 'menu-sidebar');
   // this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.nbMenuService.navigateHome();
    return false;
  }

  toggleTheme() {
    if (!this.isDark) {
      this.changeTheme('dark-2');
    } else {
      this.changeTheme('obsrio');

    }
  }
  back(){
    this.location.back();

  }

}
