import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

constructor(protected router: Router, protected authService: AuthService
) { }
 
// canActivate(route , state: RouterStateSnapshot) {
  canActivate() {
    if (this.authService.isLoggedIn()) return true;

    this.router.navigate(['/login']);

        /*
    this.router.navigate(['/login'], { returnUrl: this.state.url}); // get to you back to wanted page
    */

    return false;
  }
}

