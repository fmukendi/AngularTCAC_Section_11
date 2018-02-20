import { AuthGuard } from './auth-guard.service';
import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';

@Injectable()
//  { path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuard] },
export class AdminAuthGuard extends AuthGuard {

  // canActivate(route , state: RouterStateSnapshot) {
  canActivate() {

    let isAuthenticated = super.canActivate();
    if (!isAuthenticated)
      return false; 

    if (this.authService.currentUser.admin)
      return true; 

    this.router.navigate(['/no-access']);
    return false;
  }
}

/*

 // { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard] },
export class AdminAuthGuard  implements CanActivate {

  constructor(protected router: Router, protected authService: AuthService
) { }
  canActivate() {
     let user = thils.authService.currentUser;
     if( user && user.admin ) return true;
     this.router.navigate(['/no-access']);
     return false;
  }
}


*/
