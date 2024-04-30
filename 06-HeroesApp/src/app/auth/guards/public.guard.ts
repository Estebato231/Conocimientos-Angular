import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, RouterStateSnapshot, Router,} from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class PublicGuard implements CanMatch, CanActivate {
  constructor(
    private authservice: AuthService,
    private route: Router,
  ) { }

  private checkAuthStatus(): boolean | Observable<boolean> {

    return this.authservice.checkAuthentication()
    .pipe(
      tap( isAuthenticated => {
        if ( isAuthenticated) {
          this.route.navigate(['./'])
        }
      }),
      map( isAuthenticated => !isAuthenticated )
    )


  }


  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {

    return this.checkAuthStatus()
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

    return this.checkAuthStatus()
  }

}
